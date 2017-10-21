import fetch from 'isomorphic-unfetch'

let DPV = ({data}) =>
<section>
    <div className="container">
        <div className="product-single">
            <div className="row mt80 mb80 mb-xs-48">
                <div className="col-md-7 col-sm-6 text-center">
                    <div className="local-video-container">
                        <div className="background-image-holder">
                            <img alt="Background Image" className="background-image" src="img/choke.jpg" />
                        </div>
                        <video controls>
                            <source src={data.video.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="play-button"></div>
                    </div>
                </div>
                <div className="col-md-4 col-md-offset-1 col-sm-6">
                    <div className="description">
                        <h2 className="uppercase">{data.title}</h2>
                        <ul>
                            <li>
                                <strong>50 AED</strong> earned form this lesson
                            </li>
                            <li>
                                <strong>2 hour</strong> lesson length
                            </li>
                            <li>
                                <strong>3 people</strong> attending this lesson
                            </li>
                        </ul>
                    </div>
                    <hr className="mb48 mb-xs-24" />
                    <form className="add-to-cart">
                        <input type="submit" value="Request to book" />
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="tabbed-content text-tabs">
                        <ul className="tabs">
                            <li className="active">
                                <div className="tab-title">
                                    <span>Description</span>
                                </div>
                                <div className="tab-content">
                                    <p>
                                        Hey, my names Mark and I’ve been playing the <a href="#">#drums</a> for about 15 years on an off. You’ll learn how to do the fam…
                                        <br/><small><a href="#">read more</a></small>
                                    </p>
                                </div>
                            </li>
                            <li >
                                <div className="tab-title">
                                    <span>Reviews</span>
                                </div>
                                <div className="tab-content">
                                    <div className="col-md-5 col-sm-12 mb40">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4">
                                                <div className="avatar mb40">
                                                    <img alt="Avatar" src="img/mark.jpg" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-sm-8">
                                                <h3>Mark James</h3>
                                                <ul className="list-inline star-rating big-star">
                                                    <li>
                                                        <img alt="star" src="img/grey-star.png" />
                                                    </li>
                                                    <li>
                                                        <img alt="star" src="img/grey-star.png" />
                                                    </li>
                                                    <li>
                                                        <img alt="star" src="img/grey-star.png" />
                                                    </li>
                                                    <li>
                                                        <img alt="star" src="img/grey-star.png" />
                                                    </li>
                                                    <li>
                                                        <img alt="star" src="img/grey-star.png" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <p>Hey I'm Mark and I love all things new. Little pleases me more than learnign a new skill, tip or trick. Really hope to meet you soon 😘</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-md-offset-1">
                                        <ul className="ratings">
                                            <li>
                                                <div className="user">
                                                    <ul className="list-inline star-rating">
                                                        <li>
                                                            <img alt="star" src="img/grey-star.png" />
                                                        </li>
                                                        <li>
                                                            <img alt="star" src="img/grey-star.png" />
                                                        </li>
                                                        <li>
                                                            <img alt="star" src="img/grey-star.png" />
                                                        </li>
                                                        <li>
                                                            <img alt="star" src="img/grey-star.png" />
                                                        </li>
                                                    </ul>
                                                    <span className="bold-h6">Murray Rafferty</span>
                                                    <span className="date number">Oct 2015</span>
                                                </div>
                                                <p>
                                                    GREAT SCOTT! What a drummer!!!!
                                                </p>
                                                <p className="text-right"><small>Mark taught Murray <a href="#">Learn the drums</a></small></p>
                                            </li>
                                            <li>
                                                <div className="user">
                                                    <ul className="list-inline star-rating">
                                                        <li>
                                                            <img alt="star" src="img/grey-star.png" />
                                                        </li>
                                                        <li>
                                                            <img alt="star" src="img/grey-star.png" />
                                                        </li>
                                                        <li>
                                                            <img alt="star" src="img/grey-star.png" />
                                                        </li>
                                                        <li>
                                                            <img alt="star" src="img/grey-star.png" />
                                                        </li>
                                                        <li>
                                                            <img alt="star" src="img/grey-star.png" />
                                                        </li>
                                                    </ul>
                                                    <span className="bold-h6">Claire Taurus</span>
                                                    <span className="date number">Sept 2015</span>
                                                </div>
                                                <p>
                                                    William is an absolute legend. Small batch bastard roof party etsy, freegan heirloom shoreditch paleo narwhal locavore. Disrupt gastropub bespoke.
                                                </p>
                                                <p className="text-right"><small>Mark taught Murray <a href="#">Learn the drums</a></small></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

DPV.getInitialProps = async ({query}) => {
    let data = await fetch(`https://api.wepul.com/skills/${query.id}`).then(r => r.json())
    return {data}
}

export default DPV
