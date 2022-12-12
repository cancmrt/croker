import { CrokerJobs } from 'croker-base/app.jobs.context.js'
import { CrawlerLoader, CrokerCrawler, HttpMethodType } from 'croker-base/app.crawler.context.js'
import { DataTypes, Context } from 'croker-base/app.dbcontext.js'

export class OyakBistCompanyGetter extends CrokerJobs {
  // eslint-disable-next-line no-useless-constructor
  constructor (Plugin) {
    super(
      Plugin
    )
  }

  BistCompaniesModel = Context.define('BISTCompanies', {
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
    Symbol: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    KAPMemberId: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  })

  async Install (Job) {
    await Context.sync()
  }

  async Run (BaseJob) {
    try {
      const crawler = new CrokerCrawler()
      const loader = new CrawlerLoader()
      loader.URL = 'https://www.oyakyatirim.com.tr/piyasa-verileri/XU100'
      loader.HttpMethod = 'GET'
      const result = await crawler.Load(loader)
      if (result.IsError === true) {
        throw new Error(result.Error)
      }
      const $ = result.Document
      const AllCompaniesTable = $('div.portlet.box.green table tbody tr').toArray()
      this.BISTCompanyList = []
      for await (const el of AllCompaniesTable) {
        const SymbolOfCompany = crawler.RemoveTagAndWhiteSpaces($(el).find('td:nth-child(1) a').text())
        const NameOfCompany = crawler.RemoveTagAndWhiteSpaces($(el).find('td:nth-child(2)').text())

        const KAPLink = new CrawlerLoader()
        KAPLink.URL = 'https://www.kap.org.tr/tr/api/member/filter?keyword=' + SymbolOfCompany
        KAPLink.HttpMethod = HttpMethodType.GET
        let KapMemberId = ''
        if (KAPLink !== undefined) {
          const KAPPageResult = await crawler.LoadJSON(KAPLink)
          if (KAPPageResult.IsError === true) {
            throw new Error(KAPPageResult.Error)
          }
          const KAPSearchObj = KAPPageResult.JSON
          KapMemberId = KAPSearchObj[0].mkkMemberOid
        }
        const findedBistCompany = await this.BistCompaniesModel.findOne({
          where: {
            Symbol: SymbolOfCompany
          }
        })
        if (findedBistCompany !== null) {
          await this.BistCompaniesModel.update(
            {
              Name: NameOfCompany,
              Symbol: SymbolOfCompany,
              KAPMemberId: KapMemberId
            },
            {
              where: {
                Symbol: SymbolOfCompany
              }
            })
        } else {
          await this.BistCompaniesModel.create(
            {
              Name: NameOfCompany,
              Symbol: SymbolOfCompany,
              KAPMemberId: KapMemberId
            })
        }
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  async Completed (BaseJob) {
    console.log('completed')
  }
};
