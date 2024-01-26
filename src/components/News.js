import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
        articles= [
          {
            "source": { "id": null, "name": "The Indian Express" },
            "author": "Tushar Bhaduri",
            "title": "England cricketer Shoaib Bashir granted visa: MEA sources - The Indian Express",
            "description": "Clearance for individuals with Pak roots takes time, says source; nod comes too late for spinner to make Test debut in Hyderabad",
            "url": "https://indianexpress.com/article/sports/cricket/england-cricketer-shoaib-bashir-granted-visa-mea-sources-9125925/",
            "urlToImage": "https://images.indianexpress.com/2024/01/bassir.jpg",
            "publishedAt": "2024-01-24T12:52:00Z",
            "content": "England cricketer Shoaib Bashir has finally got an India visa even though the travel formalities were completed too late for the youngster to make his debut in the first Test starting in Hyderabad on… [+4959 chars]"
          },
          {
            "source": { "id": "google-news", "name": "Google News" },
            "author": null,
            "title": "\"Hope This Phase Passes...\": Harsha Bhogle On Virat Kohli Opting Out Of Two England Tests | Cricket News - NDTV Sports",
            "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pbmRpYS12cy1lbmdsYW5kLTIwMjQvaG9wZS10aGlzLXBoYXNlLXBhc3Nlcy1oYXJzaGEtYmhvZ2xlLW9uLXZpcmF0LWtvaGxpLW9wdGluZy1vdXQtb2YtdHdvLWVuZ2xhbmQtdGVzdHMtNDkxNjczN9IBAA",
            "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
            "publishedAt": "2024-01-24T12:03:39Z",
            "content": null
          },
          {
            "source": { "id": null, "name": "Hindustan Times" },
            "author": "HT Sports Desk",
            "title": "England announce XI for 1st Test: Anderson dropped, debutant among 3 spinners - Hindustan Times",
            "description": "The lone pacer in England's XI for first Test vs India was Mark Wood which means there was no space for James Anderson. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/england-announce-playing-xi-for-1st-test-vs-india-james-anderson-dropped-three-spinners-including-debutant-hartley-101706090600639.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/24/1600x900/CRICKET-TEST-IND-ENG--14_1706090662143_1706090677163.JPG",
            "publishedAt": "2024-01-24T10:08:43Z",
            "content": "Lancashire left-arm spinner Tom Hartley will make his debut as England announced their playing XI for the first Test against India more than 20 hours before the toss in Hyderabad. The Ben Stokes-led … [+2875 chars]"
          },
          {
            "source": { "id": null, "name": "NDTV News" },
            "author": null,
            "title": "Massive Crowd At Ram Temple Day After Grand Opening, Long Queue Outside - NDTV",
            "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
            "url": "https://www.ndtv.com",
            "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
            "publishedAt": "2024-01-24T02:45:28Z",
            "content": null
          }
        ]
      
      
    constructor(){
        super();
        console.log("Hello I am a Constructor from news component")
        this.state={
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d935ab7669804cc6b2e2ea29a7929f36";
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>News-App Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
              
              return  <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            })}

           
    </div>
    </div>
 
    )
  }
}

export default News
