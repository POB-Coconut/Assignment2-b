import React, { Component } from "react";
import "./temp.css";

const today = new Date().getDate();
const storageData =
  JSON.parse(localStorage.getItem("data")).filter(
    (i) => new Date(i.date).getDate() === today
  ) || [];

function getBrand(props) {
  const map = new Map();
  props.forEach((element) => {
    map.set(element.brand, true);
  });

  return map;
}

function getData(brand) {
  const data = storageData.filter((item) => {
    return brand.get(item.brand);
  });
  return data;
}

class RecentListPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: storageData,
      brand: getBrand(storageData),
      tempData: [],
      priceToggle: true,
      recentToggle: true,
    };
  }
  handleClick(name) {
    this.state.brand.set(name, !this.state.brand.get(name));
    this.setState(() => {
      return { ...this.state, data: getData(this.state.brand) };
    });
  }

  onInterset(checked) {
    const { data, tempData } = this.state;
    if (checked) {
      this.setState({
        tempData: [...data],
        data: data.filter((v) => v.interest),
      });
    } else {
      this.setState({
        data: [...tempData],
      });
    }
    // this.setState(() => {
    //   return { ...this.state, data: getData(this.state.brand) };
    // });
    console.log(this.state, checked);
  }

  onSortCheap() {
    const { priceToggle, data } = this.state;

    if (priceToggle) {
      this.setState({
        priceToggle: !priceToggle,
        data: data.sort((a, b) => a.price - b.price),
      });
    } else {
      this.setState({
        priceToggle: !priceToggle,
        data: data.sort((a, b) => b.price - a.price),
      });
    }
  }

  onSortRecent() {
    const { recentToggle, data } = this.state;

    if (recentToggle) {
      this.setState({
        recentToggle: !recentToggle,
        data: data.sort((a, b) => new Date(a.date) - new Date(b.date)),
      });
    } else {
      this.setState({
        recentToggle: !recentToggle,
        data: data.sort((a, b) => new Date(b.date) - new Date(a.date)),
      });
    }
  }

  onShowDetail(interest) {
    // interest가 true면 관심 있는 것 -> 페이지 이동
    if (interest) {
      this.props.history.push("/");
    } else {
      // interest가 false면 관심 없음 -> alert('접근금지')
      alert("관심없는 제품입니다.");
    }
  }

  // componentDidMount() {
  //   localStorage.setItem(
  //     "data",
  //     JSON.stringify([
  //       {
  //         title: "거의새것 정품 구찌 보스턴백 토트백",
  //         brand: "구찌",
  //         price: 380000,
  //         interest: false,
  //         id: 1,
  //         date: new Date(2021, 6, 2),
  //       },
  //       {
  //         title: "중고 루이비통 장지갑 백화점 풀구성",
  //         brand: "루이비통",
  //         price: 400000,
  //         interest: true,
  //         id: 2,
  //         date: new Date(2021, 6, 3),
  //       },
  //       {
  //         title: "중고 스톤아일랜드 쉐도우와팬 봄니트 95",
  //         brand: "스톤아일랜드",
  //         price: 350000,
  //         interest: false,
  //         id: 3,
  //         date: new Date(2021, 6, 1),
  //       },
  //       {
  //         title: "구찌 스트랩 클러치 판매합니다.",
  //         brand: "구찌",
  //         price: 30000,
  //         interest: true,
  //         id: 4,
  //         date: new Date(2021, 6, 6),
  //       },
  //     ])
  //   );
  // }

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
              <label className="card">
                관심없는 상품 제거
                <input
                  type="checkbox"
                  onChange={(e) => this.onInterset(e.target.checked)}
                />
              </label>
              <button className="card" onClick={() => this.onSortRecent()}>
                최근 조회 순
              </button>
              <button className="card" onClick={() => this.onSortCheap()}>
                가격 낮은 순
              </button>
            </div>
          </div>
          <div className="data">
            {this.state.data.map((i) => {
              const date = new Date(i.date);
              const hour = date.getHours();
              const min = date.getMinutes();
              return (
                <dl
                  className="card"
                  key={i.id}
                  onClick={() => this.onShowDetail(i.interest)}
                >
                  {/* <dd className="card-id">{i.id}</dd> */}
                  <dd className="card-brand">{i.id}</dd>
                  <dd className="card-brand">{i.brand}</dd>
                  <dd className="card-title">{i.title}</dd>
                  <dd className="card-price">\{i.price}</dd>
                  <dd className="card-date">
                    <span>접속 로그:</span>
                    <span>{`${hour}시 ${min}분`}</span>
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
