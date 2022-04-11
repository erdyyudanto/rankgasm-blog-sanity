export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '625413d357aa6252a9d1ee5b',
                  title: 'Sanity Studio',
                  name: 'rankgasm-blog-sanity-studio',
                  apiId: '05234053-af38-4177-b87d-55d0e5126928'
                },
                {
                  buildHookId: '625413d35c2ff5405ead581c',
                  title: 'Portfolio Website',
                  name: 'rankgasm-blog-sanity',
                  apiId: '5d449fca-7cd6-4a34-8e2a-740afd56aaa7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erdyyudanto/rankgasm-blog-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://rankgasm-blog-sanity.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
