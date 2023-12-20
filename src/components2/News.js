import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { MatcherFunction } from '@testing-library/react';
import Spinner from './Spinner';

export default class News extends Component {
    articles = []
    constructor() {
        super();
        console.log("Hellow iam a constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false,
            page:1,
            totalArticles:1
          
        }
    }
    async componentDidMount()
    {
        console.log("cdn");
        let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=9c9f743a0b9f495ba21ad27463627d49&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        // let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=36e803d9e59644439ce4a05669991a66&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        console.log("the page is"+this.props.pagesize);
        this.setState({loading:true})
        let data= await fetch(url);

        let parsedData=await data.json();
        // console.log(parsedData);
        
        this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults,loading:false});
        // console.log("hii iam bhanuprakash");
        console.log("This is my particle"+this.state.articles);

    }
    handleNext = async()=>{
      console.log(Math.ceil(this.state.totalArticles/this.props.pagesize));
        if(this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pagesize))
        {
        
        }
        else{
            let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=9c9f743a0b9f495ba21ad27463627d49&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
            // let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=36e803d9e59644439ce4a05669991a66&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
            this.setState({loading:true})
            let data= await fetch(url);
            
            let parsedData=await data.json();
           
            this.setState({articles:parsedData.articles,
                page:this.state.page+1,
                loading:false
                    
                });
             
        }
       
            
    }
    handlePrevious=async()=>{
        console.log("this is my previous"+this.props.pagesize);  
        let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=9c9f743a0b9f495ba21ad27463627d49&page=${this.state.page-1}&pagesize=6`;
        // let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=36e803d9e59644439ce4a05669991a66&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data= await fetch(url);
    
        let parsedData=await data.json();
        
       
        this.setState({articles:parsedData.articles,
            page:this.state.page-1,loading:false
                
            });
            console.log("priviou"+this.state.page);
    }
 
    
    render() {
    
        
        console.log("render");
      
       
        return (
            
            <div>
                <div className='container my-5  justify-content-center'>
                    <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
                    {this.state.loading &&<Spinner/>}
                    <div className='row m-5 ' >
                    {this.state.articles.map((element)=>{
                        
                        return <div className='col mt-5 m-7' key={element.url}>
                         <NewsItem
                            title={element.title?element.title:" "} description={element.description?element.description:" "} imageurl={element.urlToImage?element.urlToImage:"https://timesofindia.indiatimes.com/photo/99153889/size-104084/99153889.jpg"} newsUrl={element.url}
                        />
                         </div>
                    })}
                       

                    </div>
                </div>
                <div className='container d-flex justify-content-between mb-5'>
                <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}   > &larr; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNext}> Next&rarr;</button>
                </div>
            </div>
        )
    }
}
