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
                  buildHookId: '61acabd3cefb11b5fc0f3300',
                  title: 'Sanity Studio',
                  name: 'portfolio-test-studio',
                  apiId: '7d14103a-67bd-4d7f-a653-f1f810bd9e49'
                },
                {
                  buildHookId: '61acabd451bb25d6cabd5efa',
                  title: 'Portfolio Website',
                  name: 'portfolio-test-web',
                  apiId: '9dea3de4-e850-49ec-ae83-a53efa8f2143'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codeBoCode/portfolio-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-test-web.netlify.app',
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
