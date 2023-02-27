//导入 mitt 包
import mitt from 'mitt'
//创建 EventBus 的实例对象
const bus = mitt()
// 将 EventBus 的实例对象共享出去
export default bus

