import React, { Component } from "react";
import "./temp.css";

import { getBrand } from "utils/data/getBrand";
// import { getData } from "utils/data/getData";
import { getStorage } from "utils/storage/getStorage";

const storageData = getStorage();

class RecentListPage extends Component {
  constructor(props) {
    super(props);
    // this.onSortBrand = this.onSortBrand.bind(this);
    // this.onSortBrand = this.onSortBrand.bind(this);
    // this.onInterset = this.onInterset.bind(this);
    // this.onSortCheap = this.onSortCheap.bind(this);
    // this.onSortRecent = this.onSortRecent.bind(this);
    // this.goShowDetail = this.goShowDetail.bind(this);
    this.state = {
      data: storageData.slice(),
      brand: getBrand(storageData),
      originData: [],
      interestToggle: true,
      priceSortToggle: 0,
      recentSortToggle: false,
    };
  }

  getData() {
    const data = this.state.data.filter((item) => {
      return (
        this.state.brand.get(item.brand) &&
        (this.state.interestToggle ? item.isNotInterested : true)
      );
    });
    return data;
  }

  handleClick(name) {
    const { brand } = this.state;
    brand.set(name, !brand.get(name));
    this.setState({ ...this.state, brand });
  }

  onInterset() {
    this.setState({
      ...this.state,
      interestToggle: !this.state.interestToggle,
    });
  }

  onSortCheap() {
    const { priceSortToggle, data } = this.state;
    const newToggle = (priceSortToggle + 1) % 3;
    this.setState({
      ...this.state,
      recentSortToggle: false,
      priceSortToggle: newToggle,
      data:
        newToggle === 0
          ? storageData.slice()
          : newToggle === 1
          ? data.sort((a, b) => a.price - b.price)
          : data.sort((a, b) => b.price - a.price),
    });
  }

  onSortRecent() {
    const { recentSortToggle, data } = this.state;

    this.setState({
      ...this.state,
      priceSortToggle: 0,
      recentSortToggle: !recentSortToggle,
      data: !recentSortToggle
        ? data.sort((a, b) => new Date(b.date) - new Date(a.date))
        : storageData.slice(),
    });
  }

  goShowDetail(isNotInterested) {
    // isNotInterested가 true면 관심 있는 것 -> 페이지 이동
    if (!isNotInterested) {
      this.props.history.push("/");
    } else {
      // isNotInterested가 false면 관심 없음 -> alert('접근금지')
      alert("관심없는 제품입니다.");
    }
  }

  render() {
    return (
      <div id="recent-page">
        <div className="recent-container">
          <div className="header card inline-block"> 최근 조회 이력</div>
          <div className="header">
            <div className="filter">
              <span>브랜드 필터: </span>
              {Array.from(this.state.brand.entries()).map(
                ([name, isChecked]) => (
                  <label
                    className={"card " + (isChecked ? "clicked" : "")}
                    key={name}
                  >
                    {name}
                    <input
                      type="checkbox"
                      defaultChecked={isChecked}
                      onChange={() => {
                        this.handleClick(name);
                      }}
                    />
                  </label>
                )
              )}
            </div>
            <div className="option">
              <span>옵션: </span>
              <label
                className={
                  "card " + (this.state.interestToggle ? "clicked" : "")
                }
              >
                관심없는 상품 제거
                <input type="checkbox" onChange={(e) => this.onInterset()} />
              </label>
              <button
                className={
                  "card " + (this.state.recentSortToggle ? "clicked" : "")
                }
                onClick={() => this.onSortRecent()}
              >
                최근 조회 순
              </button>
              <button
                className={
                  "card " + (this.state.priceSortToggle ? "clicked" : "")
                }
                onClick={() => this.onSortCheap()}
              >
                {this.state.priceSortToggle === 2
                  ? "가격 높은순"
                  : "가격 낮은순"}
              </button>
            </div>
          </div>
          <div className="data">
            {this.getData(this.state.data).map((i) => {
              const date = new Date(i.date);
              const hour = date.getHours();
              const min = date.getMinutes();
              const sec = date.getSeconds();
              return (
                <dl
                  className="card"
                  key={i.id}
                  onClick={() => this.goShowDetail(i.isNotInterested)}
                >
                  <dd className="card-id">{i.id}</dd>
                  <dd className="card-brand">{i.brand}</dd>
                  <dd className="card-title">{i.title}</dd>
                  <dd className="card-price">\{i.price}</dd>
                  {/* {i.isNotInterested && <dd>관심없는 상품</dd>} */}
                  <dd className="card-date">
                    <span>접속 로그:</span>
                    <span>{`${hour}시 ${min}분 ${sec}초`}</span>
                  </dd>
                </dl>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default RecentListPage;
