import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { ApiBaseURL } from '../ApiBaseURL';
const axios = require('axios').default;

function Home() {
  let url = ApiBaseURL('report/load');
  const [report, setReport] = useState({
    userNumber: 0,
    views: 0,
    postNumber: 0,
    adsViews: 0,
  });

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
        setReport(response.data);
      })
      .catch((errors) => {});
  }, []);
  return (
    <div>
      <Header />
      <div className='d-flex align-items-stretch'>
        {/* Sidebar Navigation Start Here */}
        <Sidebar />
        {/* Sidebar Navigation End Here*/}
        <div className='page-content'>
          <div className='page-header'>
            <div className='container-fluid'>
              <h2 className='h5 no-margin-bottom'>Dashboard</h2>
            </div>
          </div>
          <section className='no-padding-top no-padding-bottom'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-3 col-sm-6'>
                  <div className='statistic-block block'>
                    <div className='progress-details d-flex align-items-end justify-content-between'>
                      <div className='title'>
                        <div className='icon'>
                          <i className='icon-user-1' />
                        </div>
                        <strong>Số lượng User</strong>
                      </div>
                      <div className='number dashtext-1'>
                        {report.userNumber}
                      </div>
                    </div>
                    <div className='progress progress-template'>
                      <div
                        role='progressbar'
                        style={{ width: '30%' }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className='progress-bar progress-bar-template dashbg-1'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                  <div className='statistic-block block'>
                    <div className='progress-details d-flex align-items-end justify-content-between'>
                      <div className='title'>
                        <div className='icon'>
                          <i className='icon-contract' />
                        </div>
                        <strong>Tổng số bài viết</strong>
                      </div>
                      <div className='number dashtext-2'>
                        {report.postNumber}
                      </div>
                    </div>
                    <div className='progress progress-template'>
                      <div
                        role='progressbar'
                        style={{ width: '70%' }}
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className='progress-bar progress-bar-template dashbg-2'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                  <div className='statistic-block block'>
                    <div className='progress-details d-flex align-items-end justify-content-between'>
                      <div className='title'>
                        <div className='icon'>
                          <i className='icon-paper-and-pencil' />
                        </div>
                        <strong>Ads views</strong>
                      </div>
                      <div className='number dashtext-3'>
                        {report.adsViews || 0}
                      </div>
                    </div>
                    <div className='progress progress-template'>
                      <div
                        role='progressbar'
                        style={{ width: '55%' }}
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className='progress-bar progress-bar-template dashbg-3'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                  <div className='statistic-block block'>
                    <div className='progress-details d-flex align-items-end justify-content-between'>
                      <div className='title'>
                        <div className='icon'>
                          <i className='icon-writing-whiteboard' />
                        </div>
                        <strong>Tổng views</strong>
                      </div>
                      <div className='number dashtext-4'>{report.views}</div>
                    </div>
                    <div className='progress progress-template'>
                      <div
                        role='progressbar'
                        style={{ width: '35%' }}
                        aria-valuenow={35}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className='progress-bar progress-bar-template dashbg-4'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='no-padding-bottom'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='stats-2-block block d-flex'>
                    <div className='stats-2 d-flex'>
                      <div className='stats-2-arrow low'>
                        <i className='fa fa-caret-down' />
                      </div>
                      <div className='stats-2-content'>
                        <strong className='d-block'>5.657</strong>
                        <span className='d-block'>Standard Scans</span>
                        <div className='progress progress-template progress-small'>
                          <div
                            role='progressbar'
                            style={{ width: '60%' }}
                            aria-valuenow={30}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            className='progress-bar progress-bar-template progress-bar-small dashbg-2'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='stats-2 d-flex'>
                      <div className='stats-2-arrow height'>
                        <i className='fa fa-caret-up' />
                      </div>
                      <div className='stats-2-content'>
                        <strong className='d-block'>3.1459</strong>
                        <span className='d-block'>Team Scans</span>
                        <div className='progress progress-template progress-small'>
                          <div
                            role='progressbar'
                            style={{ width: '35%' }}
                            aria-valuenow={30}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            className='progress-bar progress-bar-template progress-bar-small dashbg-3'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='stats-3-block block d-flex'>
                    <div className='stats-3'>
                      <strong className='d-block'>745</strong>
                      <span className='d-block'>Total requests</span>
                      <div className='progress progress-template progress-small'>
                        <div
                          role='progressbar'
                          style={{ width: '35%' }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          className='progress-bar progress-bar-template progress-bar-small dashbg-1'
                        />
                      </div>
                    </div>
                    <div className='stats-3 d-flex justify-content-between text-center'>
                      <div className='item'>
                        <strong className='d-block strong-sm'>4.124</strong>
                        <span className='d-block span-sm'>Threats</span>
                        <div className='line' />
                        <small>+246</small>
                      </div>
                      <div className='item'>
                        <strong className='d-block strong-sm'>2.147</strong>
                        <span className='d-block span-sm'>Neutral</span>
                        <div className='line' />
                        <small>+416</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
