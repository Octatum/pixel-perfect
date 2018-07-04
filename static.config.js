import axios from 'axios'

export default {
  devServer: {
    port: 3001,
    host: 'localhost'
  },
  getSiteData: () => ({
    title: 'Pixel Perfect',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/pages/Home',
      },
      {
        path: '/servicios',
        component: 'src/pages/Services',
      },
      {
        path: '/portfolio',
        component: 'src/pages/Portfolio',
        children: [
          {
            path: '/test',
            component: 'src/components/ProjectSpotlight'
          }
        ],
      },
      {
        path: '/nosotros',
        component: 'src/pages/About',
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  },
}
