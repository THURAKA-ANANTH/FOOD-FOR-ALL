import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HOME1 from "./HOME1.jpg"
import Img2 from "./image-2.jpg"
import image from "./image.png"
import Img4 from "./image-4.jpg"
import Img5 from "./image-5.jpg"
import "../App.css"

export default function HomePage() {
  return (
    <div>
        <nav>
            <NavBar />
        </nav>

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={HOME1} class="img-1 d-block w-100 hd-image" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h1 className='welcome-image-heading'>ONLINE DONATION MANAGEMENT</h1>
                <h4 className='text-muted'>" GIVING IS NOT JUST ABOUT MAKING A DONATION, IT'S ABOUT MAKING A DIFFERENCE"</h4>
            </div>
            </div>
            <div class="carousel-item">
            <img src={Img2} class="d-block w-100 hd-image" alt="..." />

            <div class="carousel-caption d-none d-md-block">
                <h1 className='welcome-image-heading'>THE  GREATEST GOOD <br /> IS WHAT WE DO <br /> FOR ONE ANOTHER</h1>
                <h4 className='text-muted'>" You have two hands. One to help yourself, the second to help others "</h4>
            </div>
            </div>
            <div class="carousel-item">
            <img src={image} class="d-block w-100 hd-image" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h1 className='welcome-image-heading'>NO ONE HAS EVER <br /> BECOME POOR <br/> FROM GIVING </h1> 
                <h4 className='text-muted'>" All we need is to build human relations with our deeds. That's only thing that lasts forever "</h4>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

        <div className='container mt-5'>
            <h4 className='d-flex justify-content-center mb-4'>INTRODUCTION</h4>

            <div className='row mb-5'>
                <div className='col-5'>
                    <img className="img-about" src={Img4} />
                </div>

                <div className='col-7'>
                    <h6>
                    Through this platform, donors can easily make donations from the comfort of their homes or on-the-go, while organizations can effectively manage and allocate these funds to various causes.
                    Online donation management systems can be a valuable tool for nonprofits of all sizes. T
                    they can help nonprofits to streamline the donation process, improve donor communication, and track donations more effectively.
                    </h6>
                </div>

            </div>

            <h4 className='d-flex justify-content-center mb-4'>About Volunteer Contribution</h4>
            <div className='row mt-2'>
                <div className='col-7'>
                    <h6 className='mt-5'>

                    We recognize the limitations of directing a project from a distance. That’s why at each step we collaborate with local partners,
                    from school leadership, to local NGOs, to the students themselves. <br /> <br />
                    Each year,Online donation management systems play a crucial role in enabling nonprofits, charities, and other organizations to raise funds efficiently, reach a broader audience,
                    and build lasting relationships with their donors.
                   
                         
                    </h6>
                </div>
                <div className='col-5'>
                    <img className="img-about" src={Img5} />
                </div>


            </div>

        </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}
