import React, { Component } from 'react'

export class NewsItem extends Component {
 
    render() {
        let {title,description,imageurl,newsUrl}=this.props;
        console.log("news item titil is the "+title);
        
        return (
            <div>
                    <div className="card" style={{width: "18rem"}}>
                        
                    <img src={imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target='_blank' className="btn btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
