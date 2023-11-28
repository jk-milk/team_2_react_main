import React from 'react'
import '../styles/MainPage.css'
import ImageGallery from '../components/common/imageGallery/ImageGallery'
import Category from '../components/common/category/Category'
import { Col, Container, Row } from 'react-bootstrap'
import NewPost from '../components/common/category/NewPost'

const MainPage = () => {
  return (
    <>
      {/* 상단 이미기 갤러리 스페이스*/}
      <div className='w-auto d-flex justify-content-center align-items-center' style={{ height: '91vh' }}>
        <div class="container ">
          <ImageGallery path="about" />
        </div>
      </div>
      {/* 하단 커테이너 스페이스 */}
      <div className='w-auto custom-background '>
        <div class="pb-5 pt-5 container text-center">
          <h1>현지 학기제</h1>
          <p>sub name</p>
        </div>
      {/* 카테고리 컨테이너 */}
        <div className="bg-white text-dark container p-0 rounded-3">
          <Container>
            <Row className='p-4'>
              <h4>Category</h4>
            </Row>
            <Category
              name = "Hukuoka" 
              img = "https://cdn.pixabay.com/photo/2023/08/16/23/49/snail-8195174_1280.jpg" 
              detail='후쿠오카 가고 싶다ㅏㅏ'
              postCount= '5'
              />
            <Category
              name= "Nagasaki"
              img = "https://cdn.pixabay.com/photo/2023/08/16/23/49/snail-8195174_1280.jpg" 
              detail=' test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text'
              postCount= '5'
              />
            <Category
              name= "Kumamoto"
              img = "https://cdn.pixabay.com/photo/2023/08/16/23/49/snail-8195174_1280.jpg" 
              detail='testtexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttexttesttext'
              postCount= '5'
              />
            <Category
              name= "Saga"
              img = "https://cdn.pixabay.com/photo/2023/08/16/23/49/snail-8195174_1280.jpg" 
              detail='1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
              postCount= '5'
            />
            <Category
              name= "Oita"
              img = "https://cdn.pixabay.com/photo/2023/08/16/23/49/snail-8195174_1280.jpg" 
              detail='1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
              postCount= '5'
            />
            <Row>
              <h6 className='px-5 p-4'>신규 게시물</h6>
            </Row>
            <Row className='pb-5'>
              <NewPost/>
              <NewPost/>
              <NewPost/>
            </Row>
          </Container>
        </div>
        <div className='pt-5'>
        </div>
      </div>
    </>
  )
}

export default MainPage