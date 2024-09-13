"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
function MusicSchoolTestimonialCards() {
    const musicschooltestimonials = [
        {
            quote: "Music is the universal language of mankind.",
            name: "Henry Wadsworth Longfellow",
            title: "American Poet"
        },
        {
            quote: "Where words fail, music speaks.",
            name: "Hans Christian Andersen",
            title: "Danish Author"
        },
        {
            quote: "Without music, life would be a mistake.",
            name: "Friedrich Nietzsche",
            title: "German Philosopher"
        },
        {
            quote: "Music can change the world because it can change people.",
            name: "Bono",
            title: "Lead Singer of U2"
        },
        {
            quote: "One good thing about music, when it hits you, you feel no pain.",
            name: "Bob Marley",
            title: "Reggae Musician"
        },
        {
            quote: "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
            name: "Plato",
            title: "Greek Philosopher"
        },
        {
            quote: "Music is the divine way to tell beautiful, poetic things to the heart.",
            name: "Pablo Casals",
            title: "Cellist and Conductor"
        },
        {
            quote: "Music is the literature of the heart; it commences where speech ends.",
            name: "Alphonse de Lamartine",
            title: "French Writer"
        },]
    return (
        <div className="h-[20rem] w-full  dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center overflow-hidden">
            <h2 className="text-white flex justify-center mt-5 text-2xl font-semibold z-10 text-center">Hear Our harmony: Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl"> 
                    <InfiniteMovingCards
                        items={musicschooltestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>

            </div>
        </div>
    )
}

export default MusicSchoolTestimonialCards
