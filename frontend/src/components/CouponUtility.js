import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Message from './Message'

const CouponUtility = ({ history }) => {
    const [coupon, setCoupon] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        if (coupon.trim()) {
            setSuccess('Coupon applied, Enjoy!')
            setError('')
            history.push(`/placeorder/${coupon}`)
        } else {
            setError('Enter a valid coupon!')
        }

        setCoupon('')
    }

    return (
        <>
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>{success}</Message>}
            { }
            <Form onSubmit={submitHandler}>
                <Form.Control
                    className='mb-3'
                    placeholder="Have Coupon?"
                    onChange={(e) => setCoupon(e.target.value)}
                    value={coupon}
                />
                <Button
                    type='submit'
                    className='btn-block'
                    disabled={!!success}
                >
                    Apply Coupon
                </Button>
            </Form>
        </>
    )
}

export default CouponUtility
