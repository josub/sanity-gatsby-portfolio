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
                  buildHookId: '5ef0b0a805ba269619eb34b6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-df6t3bam',
                  apiId: 'c222d605-c1fe-4302-bf40-7a9769a76131'
                },
                {
                  buildHookId: '5ef0b0a8c9ba2d9defd879d2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-izqhp6fq',
                  apiId: '56786fbd-f0b9-445f-b3d4-fd1b6aa8c2a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josub/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-izqhp6fq.netlify.app',
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
