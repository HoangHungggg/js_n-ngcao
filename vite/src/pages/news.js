import news_data from "../news-data";
const news = {
  render: () => `<div>${news_data.map((tin) => (
    `<div>
           <div>
             ${tin.id}
           </div>
           <div>
              ${tin.title}
           </div>
           <div>
             ${tin.content}
           </div>
     </div>`
  )).join('')
    }</div>`
}
export { news };