//import { render } from "@testing-library/react";
//import React, { Component } from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Tabs} from "react-bootstrap";
import { Tab } from "react-bootstrap";
import {Image} from "react-bootstrap";
import { SiGooglemessages } from "react-icons/si";
import {FcLike} from "react-icons/fc" 
import {FaRegShareSquare} from "react-icons/fa" 
import {CiImageOn} from "react-icons/ci" 
import {AiOutlineFileGif} from "react-icons/ai" 
import {GrList} from "react-icons/gr" 
import {GrLocation} from "react-icons/gr"
import {BiCalendar } from "react-icons/bi"
import {BsEmojiSmile} from "react-icons/bs"
import {AiOutlineSend} from "react-icons/ai"


//import {FaRegShareSquare} from "react-icons/fa" 



//import '../style.css'

function MainPage(){
    const post_pick_style = {
       width:450,
       marginLeft:60 ,
       marginBottom:5,

      };

      const tabBarOptions = {
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        indicatorStyle: { backgroundColor: 'red', height: '100%' },
        pressOpacity: 1,
      }

    return(

        <>
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill

            >
            <Tab eventKey="home" title="For You" >
            <Card className="border-radius-0" style={{backgroundColor:"white"}}>
                <div class="d-flex p-2">
                    <div class="flex-shrink-0">
                        <Image height={50} width={50} src="https://play-lh.googleusercontent.com/xap8KnIygVoUPHju-Q1Qb9h2cDHAtobSjOgkhd-2wq3yCprCLdnSjDGXJr7Iruj6H5Q=w1052-h592-rw" roundedCircle />
                    </div>
                    <div class="flex-grow-1 ms-3">
                    <textarea style={{width:"100%",outline:0,border:0}} placeholder="What is Happening?"></textarea>
                    </div>
                </div>
                <div class="card-footer text-muted">
                    <span style={{paddingLeft:10,color:"blue"}}><CiImageOn  size={25}/> </span>
                    <span style={{paddingLeft:10,color:"blue"}}><AiOutlineFileGif size={20}/></span>
                    <span style={{paddingLeft:10, color:"blue"}}><GrList size={20}/></span>
                    <span style={{paddingLeft:10,color:"blue"}}><BsEmojiSmile size={20}/></span>
                    <span style={{paddingLeft:10,color:"blue"}}><BiCalendar size={20}/></span>
                    <span style={{paddingLeft:10,color:"blue"}}><GrLocation size={20}/></span>
                    <button type="button" class="btn btn-primary flotright">Post <AiOutlineSend/></button>
                </div>

                </Card>

            <Card className="border-radius-0">
                    <div class="d-flex p-2">
                        <div class="flex-shrink-0">
                            <Image height={50} width={50} src="https://play-lh.googleusercontent.com/xap8KnIygVoUPHju-Q1Qb9h2cDHAtobSjOgkhd-2wq3yCprCLdnSjDGXJr7Iruj6H5Q=w1052-h592-rw" roundedCircle />
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <span>Manikanta</span> <br></br>
                            Aust 12th 2023
                        </div><br></br>
                        
                        
                    </div>
                    <div style={post_pick_style} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        <Image src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80" height={200} width={500}  style={{textAlign:"center"}} rounded/>

                        <div class="like-wrapper"><FaRegShareSquare size={20} style={{margin:15}} /></div>
                        <div class="like-wrapper"><FcLike size={30} style={{margin:9}} /></div>
                        <div class="like-wrapper"><SiGooglemessages size={49} /></div>

                    </div>
                </Card>

                <Card className="border-radius-0">
                    <div class="d-flex p-2">
                        <div class="flex-shrink-0">
                            <Image height={50} width={50} src="https://play-lh.googleusercontent.com/xap8KnIygVoUPHju-Q1Qb9h2cDHAtobSjOgkhd-2wq3yCprCLdnSjDGXJr7Iruj6H5Q=w1052-h592-rw" roundedCircle />
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <span>Manikanta</span> <br></br>
                            Aust 12th 2023
                        </div><br></br>
                        
                        
                    </div>
                    <div style={post_pick_style} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        <Image src="https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" height={200} width={500}  style={{textAlign:"center"}} rounded/>

                        <div class="like-wrapper"><FaRegShareSquare size={20} style={{margin:15}} /></div>
                        <div class="like-wrapper"><FcLike size={30} style={{margin:9}} /></div>
                        <div class="like-wrapper"><SiGooglemessages size={49} /></div>

                    </div>
                </Card>

            </Tab>
            <Tab eventKey="profile" title="Following">
                <Card className="border-radius-0">
                <div class="d-flex p-2">
                    <div class="flex-shrink-0">
                        <Image height={50} width={50} src="http://m.gettywallpapers.com/wp-content/uploads/2023/06/Dark-Black-Profile-Image-For-Boy.jpg" roundedCircle />
                    </div>
                    <div class="flex-grow-1 ms-3">
                    <textarea style={{width:"100%",outline:0,border:0}} placeholder="What is Happening?"></textarea>
                    </div>
                </div>
                <div class="card-footer text-muted">
                    <span style={{paddingLeft:10,color:"blue"}}><CiImageOn  size={25}/> </span>
                    <span style={{paddingLeft:10,color:"blue"}}><AiOutlineFileGif size={20}/></span>
                    <span style={{paddingLeft:10, color:"blue"}}><GrList size={20}/></span>
                    <span style={{paddingLeft:10,color:"blue"}}><BsEmojiSmile size={20}/></span>
                    <span style={{paddingLeft:10,color:"blue"}}><BiCalendar size={20}/></span>
                    <span style={{paddingLeft:10,color:"blue"}}><GrLocation size={20}/></span>
                    <button type="button" class="btn btn-primary flotright">Post <AiOutlineSend/></button>
                </div>

                </Card>
                

                <Card className="border-radius-0">
                    <div class="d-flex p-2">
                        <div class="flex-shrink-0">
                            <Image height={50} width={50} src="http://m.gettywallpapers.com/wp-content/uploads/2023/06/Dark-Black-Profile-Image-For-Boy.jpg" roundedCircle />
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <span>Tv@News.com</span> <br></br>
                            Aust 12th 2023
                        </div><br></br>
                        
                        
                    </div>
                    <div style={post_pick_style} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        <Image src="https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985612.jpg?w=826&t=st=1694774366~exp=1694774966~hmac=e2df7fd1cb47f99a010f78f52dd3928efe46f30d40a95b2ba35107553b19e021" height={200} width={500}  style={{textAlign:"center"}} rounded/>

                        <div class="like-wrapper"><FaRegShareSquare size={20} style={{margin:15}} /></div>
                        <div class="like-wrapper"><FcLike size={30} style={{margin:9}} /></div>
                        <div class="like-wrapper"><SiGooglemessages size={49} /></div>

                    </div>
                </Card>

                <Card className="border-radius-0">
                    <div class="d-flex p-2">
                        <div class="flex-shrink-0">
                            <Image height={50} width={50} src="http://m.gettywallpapers.com/wp-content/uploads/2023/06/Dark-Black-Profile-Image-For-Boy.jpg" roundedCircle />
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <span>Tv@News.com</span> <br></br>
                            Aust 12th 2023
                        </div><br></br>
                        
                        
                    </div>
                    <div style={post_pick_style} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        <Image src="https://www.livemint.com/lm-img/img/2023/09/10/600x338/ANI-20230910068-0_1694330989608_1694331039167.jpg" height={200} width={500}  style={{textAlign:"center"}} rounded/>

                        <div class="like-wrapper"><FaRegShareSquare size={20} style={{margin:15}} /></div>
                        <div class="like-wrapper"><FcLike size={30} style={{margin:9}} /></div>
                        <div class="like-wrapper"><SiGooglemessages size={49} /></div>

                    </div>
                </Card>
                

                
            </Tab>
            
            
            </Tabs>


        
        </>
    )

}

export default MainPage;

