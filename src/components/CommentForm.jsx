import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import '../styles/CommentForm.css'

const CommentForm = ({ postId, user, created_at, onCommentSubmit }) => {
    let userId = 'abcd';
    if (user !== null) userId = user.userId;

    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!text.trim()) {
            alert("댓글 내용을 입력해주세요.");
            return;
        }

        try {
            await axios.post('http://localhost:3300/comments', {
                postId,
                userId,
                text,
                created_at, // 생성일자
            });
            setText('');
            onCommentSubmit();
        } catch (error) {
            console.error(error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { // 엔터키를 눌렀을 때 (Shift 키를 누르지 않았을 경우)
            e.preventDefault(); // 개행 방지
            handleSubmit(e);
        }
    };

    useEffect(() => {
        // textarea 의 높이를 조정
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    }, [text]);

    return (
        <Form onSubmit={handleSubmit} className='mt-3 comment-form-group'>
            <Form.Control
                as='textarea'
                rows={text.split('\n').length || 1}
                ref={textareaRef}
                value={text}
                onChange={e => { setText(e.target.value); }}
                onKeyDown={handleKeyDown}
                className='comment-form-input'
            />
            <Button type="submit" className='ms-3'>
                댓글 작성
            </Button>
        </Form>
    )
};

export default CommentForm;