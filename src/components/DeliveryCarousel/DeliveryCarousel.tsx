import { useEffect, useRef, useState } from 'react'
import { deliveryOptions } from '../../data/delivery'
import './DeliveryCarousel.css'

function DeliveryCarousel() {
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
                current === deliveryOptions.length - 1 ? 0 : current + 1,
            )
        }, 4000)

        return clearTimer
    }, [currentSlide, isVisible])

    function previousSlide() {
        setCurrentSlide((current) =>
            current === 0 ? deliveryOptions.length - 1 : current - 1,
        )
    }

    function nextSlide() {
        setCurrentSlide((current) =>
            current === deliveryOptions.length - 1 ? 0 : current + 1,
        )
    }

    const option = deliveryOptions[currentSlide]

    return (
        <div ref={carouselRef} className="carrossel-delivery">
            <div className="slide-del">
                <img src={option.image} alt={option.title ?? 'Opção de delivery'} />

                {option.url && (
                    <a
                        href={option.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-foto"
                    >
                        Pedir Agora
                    </a>
                )}
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

export default DeliveryCarousel