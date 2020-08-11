import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import {httpgetbanner} from '../../../util/request'
import './banner.css'
export default class Banner extends Component {
    state = {
        data: [],
        imgHeight: 176,
      }
      componentDidMount() {
        httpgetbanner().then(res=>{
           setTimeout(() => {
          this.setState({
            data:res.data.list,
          });
        }, 100);

        })
      }
    render() {
        return (
            <div>
                <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(item => (
            <a
              key={item.id}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`${item.img}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
            </div>
        )
    }
}
