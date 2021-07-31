import React, { Component } from 'react';


export default class RecentList extends Component {
  render() {
   
    return (
      <dl
      className="card"
      onClick={() => this.props.goShowDetail(this.props.item.isNotInterested, this.props.item.id)}
    >
      {/* <dd className="card-id">{this.props.item.id}</dd> */}
      <dd className="card-brand">{this.props.item.brand}</dd>
      <dd className="card-title">{this.props.item.title}</dd>
      <dd className="card-price">\{this.props.item.price}</dd>
      {/* {this.props.item.isNotInterested && <dd>관심없는 상품</dd>} */}
      <dd className="card-date">
        <span>접속 로그:</span>
        <span>{`${this.props.date.hour}시 ${this.props.date.min}분 ${this.props.date.sec}초`}</span>
      </dd>
    </dl>
    )
  }
}
