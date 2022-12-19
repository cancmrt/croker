import { CrokerJobs } from 'croker-base/app.jobs.context.js'
import { CrawlerLoader, CrokerCrawler, HttpMethodType } from 'croker-base/app.crawler.context.js'
import { DataTypes, Context } from 'croker-base/app.dbcontext.js'
import { BistCompaniesModel } from '../OyakBistCompanyGetter/OyakBistCompanyGetter.js'
import moment from 'moment'

const BistCompaniesNotificationsModel = Context.define('BistCompaniesNotifications', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  CompanyId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  KAPMemberId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  KAPNotifyId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  KAPClass: {
    type: DataTypes.STRING,
    allowNull: false
  },
  KAPType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  KAPCategory: {
    type: DataTypes.STRING,
    allowNull: false
  },
  PublishDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Summary: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

export class BistCompanyNotificationGetter extends CrokerJobs {
  // eslint-disable-next-line no-useless-constructor
  constructor (Plugin) {
    super(
      Plugin
    )
  }

  async Install (Job) {
    await Context.sync()
  }

  async Run (BaseJob) {
    try {
      const URL = 'https://www.kap.org.tr/tr/FilterSgbf/FILTERSGBF/{KAPMemberId}/ALL/{NotifyInterval}'
      const NotifyInterval = '365'

      const AllCompanies = await BistCompaniesModel.findAll()
      for await (const company of AllCompanies) {
        const GoURL = URL.replace('{KAPMemberId}', company.KAPMemberId).replace('{NotifyInterval}', NotifyInterval)
        const crawler = new CrokerCrawler()
        const loader = new CrawlerLoader()
        loader.URL = GoURL
        loader.HttpMethod = HttpMethodType.GET
        const result = await crawler.LoadJSON(loader)
        if (result.IsError === true) {
          throw new Error(result.Error)
        }
        const CompanyNotifications = result.JSON
        for await (const noti of CompanyNotifications) {
          const findedNoti = await BistCompaniesNotificationsModel.findOne({
            where: {
              KAPNotifyId: noti.basic.disclosureId
            }
          })
          if (findedNoti === null) {
            await BistCompaniesNotificationsModel.create(
              {
                CompanyId: company.Id,
                KAPMemberId: company.KAPMemberId,
                KAPNotifyId: noti.basic.disclosureId,
                KAPClass: noti.basic.disclosureClass,
                KAPType: noti.basic.disclosureType,
                KAPCategory: noti.basic.disclosureCategory,
                PublishDate: moment(noti.basic.publishDate, 'DD.MM.YY HH:MM').toDate(),
                Title: noti.basic.title,
                Summary: noti.basic.summary
              })
          }
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
