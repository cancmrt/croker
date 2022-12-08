import { CrawlerLoader, CrokerCrawler, HttpMethodType } from 'croker-base/app.crawler.context.js'
import { CrokerJobs } from 'croker-base/app.jobs.context.js'
import { DataTypes, Context } from 'croker-base/app.dbcontext.js'

export class BistStaticValueGetter extends CrokerJobs {
  constructor () {
    super(
      'BIST Daily Values Getter',
      'BistStaticValueGetter',
      '00 19 * * 1-6',
      '1.0.0'
    )
  }

  BistDailyValuesModel = Context.define('BistDailyValues', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    Value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DateOfValue: {
      type: DataTypes.DATE,
      allowNull: false
    }
  })

  async Install (Job) {
    await Context.sync()
  }

  async Run (BaseJob) {
    const crawler = new CrokerCrawler()
    const loader = new CrawlerLoader()
    loader.URL = 'https://www.finnet.com.tr/f2000/endeks/EndeksAnaliz.aspx'
    loader.HttpMethod = HttpMethodType.GET
    const result = await crawler.Load(loader)
    if (result.IsError === true) {
      throw new Error(result.Error)
    }
    const $ = result.Document

    const FKBaslikIndex = $('.ozetbaslikkbaslik').toArray().findIndex(el => crawler.RemoveTagAndWhiteSpaces($(el).text()) === 'F/K')
    const PDDDBaslikIndex = $('.ozetbaslikkbaslik').toArray().findIndex(el => crawler.RemoveTagAndWhiteSpaces($(el).text()) === 'PD/DD')

    const ValuesArray = $('.ozetbaslikdata').toArray()
    const FKValue = Number(crawler.RemoveTagAndWhiteSpaces($(ValuesArray[FKBaslikIndex]).find('span').text()))
    const PDDDValue = Number(crawler.RemoveTagAndWhiteSpaces($(ValuesArray[PDDDBaslikIndex]).find('span').text()))

    await this.BistDailyValuesModel.create({
      Name: 'F/K',
      Value: FKValue.toLocaleString('tr-TR'),
      DateOfValue: new Date()
    })

    await this.BistDailyValuesModel.create({
      Name: 'PD/DD',
      Value: PDDDValue.toLocaleString('tr-TR'),
      DateOfValue: new Date()
    })
  }

  async Completed (BaseJob) {
    console.log('completed')
  }
}
