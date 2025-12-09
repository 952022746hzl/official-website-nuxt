export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    notifications: {
      position: 'top-right'
    }
  },
  // 网站基本信息
  site: {
    name: '公司官方网站',
    description: '我们致力于为客户提供优质的产品和服务，以创新技术推动行业发展',
    url: 'https://www.company.com',
    logo: '/logo.png'
  },
  // 联系信息
  contact: {
    phone: '400-123-4567',
    email: 'contact@company.com',
    address: '北京市朝阳区某某大厦1001室'
  }
})
