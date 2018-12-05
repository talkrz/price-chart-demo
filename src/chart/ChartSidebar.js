import React from 'react';
import GithubIcon from '../GithubIcon';
import './ChartSidebar.css';

export default function ChartSidebar({ chartViewModel, zoom, setZoom, theme, setTheme }) {
  const data = chartViewModel.data;
  const price = data.length && data[data.length - 1].c;
  const change = chartViewModel.change ? chartViewModel.change : 0.0;
  const priceMin = chartViewModel.priceMin;
  const priceMax = chartViewModel.priceMax;

  return (
    <div className={`ChartSidebar ChartSidebar-${theme}`}>
      <div className="ChartSidebar-controls">
        <div className="ChartSidebar-price">
          <span className={`ChartSidebar-change`}>
            {price.toFixed(2)}
          </span>
          <span className={`ChartSidebar-percent ${change >= 0.0 ? 'ChartSidebar-bull' : 'ChartSidebar-bear'}`}>
            &nbsp;{change >= 0.0 ? '+' : ''}{change.toFixed(2)}%
          </span>
        </div>
        <table className={`ChartSidebar-table ChartSidebar-table-${theme}`}>
          <tbody>
            <tr>
              <th>Min price</th>
              <td>{priceMin}</td>
            </tr>
            <tr>
              <th>Max price</th>
              <td>{priceMax}</td>
            </tr>
          </tbody>
        </table>
        <div className={`ChartSidebar-control ChartSidebar-control-${theme}`}>
          <p className="ChartSidebar-label">
            Theme:
          </p>

          <div className="ChartSidebar-theme">
            <label>
              <input
                type="radio"
                value="light"
                checked={theme === "light"}
                onChange={(e) => { setTheme(e.target.value) }}
              />
              Light
            </label>
            <label>
              <input
                type="radio"
                value="dark"
                checked={theme === "dark"}
                onChange={(e) => { setTheme(e.target.value) }}
              />
              Dark
            </label>
          </div>
        </div>
        <div className={`ChartSidebar-control ChartSidebar-control-${theme}`}>
          <label htmlFor="zoom" className="ChartSidebar-label">
            Zoom:
          </label>
          <input
            disabled={true} type="text" value={zoom}
            onChange={e => setZoom(e.target.value)} />
        </div>
      </div>
      <p>Tip: scroll over the chart to zoom</p>
      <div className={`ChartSidebar-gihub ChartSidebar-gihub-${theme}`}>
        <p>See the code on GitHub:</p>
        <a href="https://github.com/talkrz/price-chart" target="_blank" rel="noopener noreferrer">
          <GithubIcon width="20" height="20" color={theme === 'light' ? '#444' : '#aaa'} />
          Price Chart
        </a>
        <a href="https://github.com/talkrz/price-chart-demo" target="_blank" rel="noopener noreferrer">
          <GithubIcon width="20" height="20" color={theme === 'light' ? '#444' : '#aaa'} />
          This demo
        </a>

      </div>
    </div>
  )
}
