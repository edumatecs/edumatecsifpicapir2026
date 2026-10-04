import { useEffect, useRef, useState } from 'react'
import './TourismCarousel.css'

import ponto1 from '../../assets/images/pontos/1-ponto.webp'
import ponto2 from '../../assets/images/pontos/2-ponto.webp'
import ponto3 from '../../assets/images/pontos/3-ponto.webp'
import ponto4 from '../../assets/images/pontos/4-ponto.webp'
import ponto5 from '../../assets/images/pontos/5-ponto.webp'
import ponto6 from '../../assets/images/pontos/6-ponto.webp'

const slides = [
    { src: ponto1, alt: 'Guia Turístico' },
    { src: ponto2, alt: 'Sete Cidades' },
    { src: ponto3, alt: 'Açude Caldeirão' },
    { src: ponto4, alt: 'Igreja Matriz' },
    { src: ponto5, alt: 'Praça da Bandeira' },
    { src: ponto6, alt: 'Rancho Guarita' },
]

function TourismCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const carouselRef = useRef<HTMLDivElement>(null)
    const timerRef = useRef<number | null>(null)

    function clearTimer() {
        if (timerRef.current !== null) {
            window.clearTimeout(timerRef.current)
            timerRef.current = null
        }
    }

    useEffect(() => {
        const carousel = carouselRef.current

        if (!carousel) {
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)

                if (!entry.isIntersecting) {
                    setCurrentSlide(0)
                }
            },
            {
                threshold: 0.2,
            },
        )

        observer.observe(carousel)

        return () => {
            observer.disconnect()
            clearTimer()
        }
    }, [])

    useEffect(() => {
        clearTimer()

        if (!isVisible) {
            return
        }

        timerRef.current = window.setTimeout(() => {
            setCurrentSlide((current) =>
                current === slides.length - 1 ? 0 : current + 1,
            )
        }, 4000)

        return clearTimer
    }, [currentSlide, isVisible])

    function previousSlide() {
        setCurrentSlide((current) =>
            current === 0 ? slides.length - 1 : current - 1,
        )
    }

    function nextSlide() {
        setCurrentSlide((current) =>
            current === slides.length - 1 ? 0 : current + 1,
        )
    }

    const slide = slides[currentSlide]

    return (
        <div ref={carouselRef} className="carrossel-container">
            <div className="slide">
                <img src={slide.src} alt={slide.alt} />
            </div>

            <button
                type="button"
                className="btn-carrossel prev"
                onClick={previousSlide}
                aria-label="Imagem anterior"
            >
                ❮
            </button>

            <button
                type="button"
                className="btn-carrossel next"
                onClick={nextSlide}
                aria-label="Próxima imagem"
            >
                ❯
            </button>
        </div>
    )
}

export default TourismCarousel