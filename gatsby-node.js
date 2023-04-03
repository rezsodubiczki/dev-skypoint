const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResult = await graphql(`
    query {
      allPrismicSubpage {
        nodes {
          uid
          url
        }
      }
    }
  `)

  const productTemplate = path.resolve(`src/templates/using-dsg.js`)
  queryResult.data.allPrismicPage.nodes.forEach(node => {
    createPage({
      path:  "/"+page.uid,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        product: node,
      },
    })
  })
}


// const path = require("path");

// exports.createPages = async (gatsbyContext) => {
//   const { actions, graphql } = gatsbyContext;
//   const { createPage } = actions;

//   {
//     const queryResult = await graphql(`
//       query {
//         allPrismicPage {
//           nodes {
//             id
//             url
//           }
//         }
//       }
//     `);

//     for (const page of queryResult.data.allPrismicPage.nodes ?? []) {
//       createPage({
//         path: page.url,
//         component: path.resolve(__dirname, "./src/templates/using-dsg.js"),
//         context: { id: page.id },
//       });
//     }
//   }
// }
