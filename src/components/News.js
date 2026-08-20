import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "null",
        name: "SamMobile",
      },
      author: "Asif Iqbal Shaik",
      title:
        "Samsung will now charge more to make 5nm or better chips for its clients",
      description:
        "Samsung makes advanced semiconductor chips not only for itself but also for other companies. Its contract chipmaking business faced a lot of issues over the past four to five years, but it has picked up so much momentum in the past year that the company, whic…",
      url: "https://www.sammobile.com/news/samsung-will-now-charge-more-to-make-5nm-or-better-chips-for-its-clients/",
      urlToImage:
        "https://www.sammobile.com/wp-content/uploads/2026/08/Samsung-Foundry-Chip-Fabrication.jpg",
      publishedAt: "2026-08-20T05:16:55Z",
      content:
        "Samsung makes advanced semiconductor chips not only for itself but also for other companies. Its contract chipmaking business faced a lot of issues over the past four to five years, but it has picked… [+1739 chars]",
    },
    {
      source: {
        id: "null",
        name: "Autocar",
      },
      author: "Nick Gibbs",
      title:
        "Chinese car makers take a fifth of the UK market – can they keep growing?",
      description:
        "Affordable electrified vehicles power a huge surge in Chinese car sales, as legacy firms struggle to stay competitive\n\nChinese brands accounted for almost a fifth of all UK registrations in July as newcomers Omoda-Jaecoo and BYD both celebrated their 100,000t…",
      url: "https://www.autocar.co.uk/car-news/business-car-sales/chinese-car-makers-take-fifth-uk-market-%E2%80%93-can-they-keep-growing",
      urlToImage:
        "https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/4._jaecoo_range_on_road.jpg",
      publishedAt: "2026-08-20T04:00:00Z",
      content:
        "Chinese brands accounted for almost a fifth of all UK registrations in July as newcomers Omoda-Jaecoo and BYD both celebrated their 100,000th UK sale in quick succession.\r\nA mix of keen prices, elect… [+181 chars]",
    },
    {
      source: {
        id: "techradar",
        name: "TechRadar",
      },
      author: "Leon Poultney",
      title:
        "Tesla’s Robotaxi gets caught crashing through bollards, just as it readies the purpose-built Cybercab for public roads",
      description:
        "Tesla Robotaxi gets confused by bollards — just as the Cybercab gets ready for the road",
      url: "https://www.techradar.com/vehicle-tech/hybrid-electric-vehicles/teslas-robotaxi-gets-caught-crashing-through-bollards-just-as-it-readies-the-purpose-built-cybercab-for-public-roads",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/JYHq2wQHiozy684Uz3oCa-1700-80.jpg",
      publishedAt: "2026-08-20T03:30:00Z",
      content:
        '<ul><li>Texas Robotaxi passenger films car hitting plastic bollards</li><li>Company claims "impeccable" Robotaxi safety record </li><li>Tesla is preparing Cybercabs for public roads imminently</li></… [+3590 chars]',
    },
    {
      source: {
        id: "null",
        name: "Pypi.org",
      },
      author: null,
      title: "wallmonitor added to PyPI",
      description:
        "Local-only monitoring and recording UI for a Tesla Wall Connector Gen 3",
      url: "https://pypi.org/project/wallmonitor/",
      urlToImage: null,
      publishedAt: "2026-08-20T01:01:34Z",
      content:
        "A local-only companion for the Tesla Wall Connector Gen 3 that grew well\r\nbeyond reading data off the charger: it records everything the device\r\nreports, turns that history into a thermal model fitte… [+4082 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News - Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return(
            <div className="col-md-3">
              <NewsItem
                key = {element.url}
                title={element.title}
                discription={element.description}
                imageUrl={element.urlToImage}
              />
            </div>);
          })}
        </div>
      </div>
    );
  }
}
export default News;
