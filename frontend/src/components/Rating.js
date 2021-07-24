import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
    const minRating = 1
    const maxRating = 5

    const getStars = () => {
        let stars = []

        for (let i = minRating; i <= maxRating; i++) {
            stars.push(
                <span key={i}>
                    <i style={{ color }}
                        className={
                            value >= i
                                ? 'fas fa-star'
                                : value >= i - 0.5
                                    ? 'fas fa-star-half-alt'
                                    : 'far fa-star'
                        }
                    ></i>
                </span>
            )
        }

        return stars
    }

    return (
        <div className='rating'>
            {getStars()}
            <span>{text && text}</span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Rating
