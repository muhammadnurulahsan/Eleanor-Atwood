import React from "react";
import "./Blogs.css";
import img01 from "../../../src/Img/Authentication_vs_Authorization.png";
import img02 from "../../../src/Img/firebase.png";
import img03 from "../../../src/Img/firebase-other.png";

const Blogs = () => {
  return (
    <div className="custom-margin">
      <div className="top-banner">
        <div className="container pt-5">
          <h1 className="big-text ms-4">Blogs</h1>
          <h5 className="ms-4 text-secondary">
            Home <span className="normal-text">/ Blogs</span>
          </h5>
        </div>
      </div>

      <div className="blog-container">
        <div className="row-cols-1 my-5">
          <div className="row-md-cols-2">
            <div className="container">
              <div className="text-center">
                <h1 className="blogs-big-text mb-5">
                  Difference between authorization and authentication
                </h1>
              </div>
              <div className="d-flex align-items-center justify-content-evenly mx-5">
                <div>
                  <img src={img01} className="shadow rounded-3 mt-4" alt="" />
                </div>
                <div className="ms-5 mt-5">
                  <p className="normal-text">
                    Both <strong>Authentication and Authorization</strong> area
                    unit utilized in respect of knowledge security that permits
                    the safety on an automatic data system. Each area unit
                    terribly crucial topics usually related to the online as key
                    items of its service infrastructure. The main difference
                    between the two is the way they are used.
                  </p>
                  <p className="normal-text">
                    In <strong>authentication</strong> process, the identity of
                    users are checked for providing the access to the system.
                    While in authorization process, person’s or user’s
                    authorities checked for accessing the resources.
                    Authentication is done before the authorization process,
                    whereas authorization process is done after the
                    authentication process.
                  </p>
                </div>
              </div>
              <div className="m-5 text-center py-5">
                <h1 className="blogs-big-text ">
                  What is difference in Authentication and Authorization?
                </h1>
                <table class="table normal-text table-striped table-bordered my-5">
                  <thead>
                    <tr className="title-text text-start">
                      <th className="ps-5" scope="col">
                        Authentication
                      </th>
                      <th className="ps-5" scope="col">
                        Authorization
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-start">
                    <tr>
                      <td>
                        <ul>
                          <li>
                            <p className="mt-3">
                              In authentication process, the identity of users
                              are <br /> checked for providing the access to the
                              system.
                            </p>
                          </li>
                          <li>
                            <p>Block elements always start in a line.</p>
                          </li>
                          <li>
                            <p>
                              In authentication process, users or persons are
                              verified.
                            </p>
                          </li>
                          <li>
                            <p>It is done before the authorization process.</p>
                          </li>
                          <li>
                            <p>It needs usually user’s login details.</p>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <p className="mt-3">
                              While in authorization process, person’s or user’s{" "}
                              <br />
                              authorities are checked for accessing the
                              resources.
                            </p>
                          </li>
                          <li>
                            <p>
                              While in this process, users or persons are
                              validated.
                            </p>
                          </li>
                          <li>
                            <p>
                              Authorization isn’t visible to or changeable by
                              the user.
                            </p>
                          </li>
                          <li>
                            <p>
                              While this process is done after the
                              authentication process.
                            </p>
                          </li>
                          <li>
                            <p>
                              While it needs user’s privilege or security
                              levels.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center">
                <h1 className="blogs-big-text">Why are you using firebase?</h1>
                <p className="normal-text">
                  Firebase is a cloud-based platform that provides a
                  comprehensive set of services for managing data, <br />
                  authentication, and security in the cloud. It is a great way
                  to build a secure, scalable, <br /> and reliable backend for
                  your web and mobile applications.
                </p>
              </div>
              <div className="d-flex align-items-center m-5">
                <div className="me-5">
                  <h1 className="blogs-big-text">
                    4 Reasons to using firebase
                  </h1>
                  <ol>
                    <li className="normal-text">
                      <strong>Incredibly Built-In Analytics</strong>
                    </li>
                    <p className="normal-text">
                      <strong>Features:</strong> Unlimited Reporting, Audience
                      Segmentation, Integration with Other Services.
                    </p>
                    <li className="normal-text">
                      <strong>App Development Made Easy</strong>
                    </li>
                    <p className="normal-text">
                      <strong>Features:</strong> Cloud Messaging,
                      Authentication, Hosting, Remote Configuration, Test Lab,
                      Crash Reporting, Realtime Database, Storage.
                    </p>
                    <li className="normal-text">
                      <strong>Growth and User Engagement</strong>
                    </li>
                    <p className="normal-text">
                      <strong>Features:</strong> AdWords, App Indexing, Dynamic
                      Links, Invites, Notifications.
                    </p>
                    <li className="normal-text">
                      <strong>Increase Your Earnings</strong>
                    </li>
                    <p className="normal-text">
                      <strong>Features:</strong> Of course, the point of having
                      an app or any other business strategy is to increase your
                      earnings.
                    </p>
                  </ol>
                </div>
                <div>
                  <img src={img02} className="rounded-3 shadow" alt="" />
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-center">
                  <img alt="" />
                </div>
                <div className="m-5 text-center">
                  <h1 className="blogs-big-text">
                    What other services does firebase <br /> provide other than
                    authentication?
                  </h1>
                  <div className="d-flex align-items-center justify-content-evenly my-5">
                    <div>
                      <img
                        src={img03}
                        className="shadow rounded-3 mt-4"
                        alt=""
                      />
                    </div>
                    <div className="ms-5 mt-4 text-start">
                      <p className="normal-text">
                        Firebase is a full package that can help in developing
                        your mobile or web applications faster with fewer
                        resources and more efficiency. Now, let’s look at some
                        of the services and use of it.
                      </p>
                      <p className="normal-text">
                        There are many services which Firebase provides, Most
                        useful of them are:
                      </p>
                      <div className="d-flex">
                        <div className="normal-text">
                          <li>Cloud Firestore</li>
                          <li>Cloud Functions</li>
                          <li>Authentication</li>
                          <li>Hosting</li>
                          <li>Cloud Storage</li>
                        </div>
                        <div className="normal-text ms-5">
                          <li>Google Analytics</li>
                          <li>Predictions</li>
                          <li>Cloud Messaging</li>
                          <li>Dynamic Links</li>
                          <li>Remote Config</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="down-banner"></div>
    </div>
  );
};

export default Blogs;
