import React, { Component } from "react";
import "./temp.css";
import { getBrand } from "utils/data/getBrand";
import { getData } from "utils/data/getData";
import { getStorage } from "utils/storage/getStorage";
import { clearStorage } from "utils/storage/clearStorage";

class RecentListPage extends Component {
  constructor(props) {
    super(props);
    this.onSortBrand = this.onSortBrand.bind(this);
    this.onSortBrand = this.onSortBrand.bind(this);
    this.onInterset = this.onInterset.bind(this);
    this.onSortCheap = this.onSortCheap.bind(this);
    this.onSortRecent = this.onSortRecent.bind(this);
    this.goShowDetail = this.goShowDetail.bind(this);
    this.state = {
      data: getStorage(),
      originData: getStorage(),
      brand: getBrand(getStorage()),
      priceSortToggle: false,
      recentSortToggle: false,
    };
  }

  componentDidMount() {
    const { data } = this.state;
    const today = new Date().getDate();

    if (data.length > 0) {
      const currentDate = new Date(data[0].date).getDate();

      if (today !== currentDate) {
        clearStorage();
        this.setState({
          ...this.state,
          data: [],
        });
      }
    }
  }

  onSortBrand(name) {
    const { brand, data, originData } = this.state;
    brand.set(name, !brand.get(name, data));
    this.setState({
      ...this.state,
      data: getData(brand, originData),
    });
  }

  onInterset(checked) {
    const { data, originData } = this.state;
    if (checked) {
      this.setState({
        ...this.state,
        originData: [...data],
        data: data.filter((v) => !v.isNotInterested),
      });
    } else {
      this.setState({
        ...this.state,
        data: [...originData],
      });
    }
  }

  onSortCheap() {
    const { priceSortToggle, originData, data } = this.state;

    if (priceSortToggle) {
      this.setState({
        ...this.state,
        priceSortToggle: !priceSortToggle,
        data: data.sort((a, b) => a.price - b.price),
        originData: originData.sort((a, b) => a.price - b.price),
      });
    } else {
      this.setState({
        ...this.state,
        priceSortToggle: !priceSortToggle,
        data: data.sort((a, b) => b.price - a.price),
        originData: originData.sort((a, b) => b.price - a.price),
      });
    }
  }

  onSortRecent() {
    const { recentSortToggle, originData, data } = this.state;

    if (recentSortToggle) {
      this.setState({
        ...this.state,
        recentSortToggle: !recentSortToggle,
        data: data.sort((a, b) => new Date(a.date) - new Date(b.date)),
        originData: originData.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        ),
      });
    } else {
      this.setState({
        ...this.state,
        recentSortToggle: !recentSortToggle,
        data: data.sort((a, b) => new Date(b.date) - new Date(a.date)),
        originData: originData.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ),
      });
    }
  }

  goShowDetail(isNotInterested, id) {
    // isNotInterested가 true면 관심 있는 것 -> 페이지 이동
    if (!isNotInterested) {
      this.props.history.push(`/product/${id}`);
    } else {
      // isNotInterested가 false면 관심 없음 -> alert('접근금지')
      alert("관심없는 제품입니다.");
    }
  }

  render() {
    return (
      <div>
        <p>ProductPage</p>
        {Array.from(this.state.brand.entries()).map(([name, isChecked]) => (
          <div key={name}>
            <label>
              {name}
              <input
                type="checkbox"
                defaultChecked={isChecked}
                onChange={(e) => {
                  this.onSortBrand(name, e.target.checked);
                }}
              />
            </label>
          </div>
        ))}
        <label htmlFor="check isNotInterested">관심 없는 상품 제거하기</label>
        <input
          type="checkbox"
          id="check isNotInterested"
          onChange={(e) => this.onInterset(e.target.checked)}
        />
        <button onClick={() => this.onSortRecent()}>최근 조회 순</button>
        <button onClick={() => this.onSortCheap()}>가격 낮은 순</button>
        <div className="data">
          {this.state.data.map((i) => (
            <ul
              key={i.id}
              onClick={() => this.goShowDetail(i.isNotInterested, i.id)}
            >
              <li>{i.title}</li>
              <li>{i.brand}</li>
              <li>{i.price}</li>
              <li>{i.id}</li>
              <li>{i.date}</li>
              {i.isNotInterested && <li>관심없는 상품</li>}
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default RecentListPage;
