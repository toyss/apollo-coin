// 云函数入口文件
const cloud = require('wx-server-sdk')
const { PublicClient } = require('@okfe/okex-node')

const pClient = new PublicClient('https://www.okex.me')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await pClient.spot().getSpotBook('BTC-USDT', { size: 10 })
}