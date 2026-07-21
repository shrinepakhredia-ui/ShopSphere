import styles from "./WhyChooseUs.module.css";

import {
    FaTruck,
    FaShieldAlt,
    FaUndoAlt,
    FaHeadset
} from "react-icons/fa";

const features = [

    {
        icon: <FaTruck />,
        title: "Free Shipping",
        description: "Fast and reliable delivery on every order."
    },

    {
        icon: <FaShieldAlt />,
        title: "Secure Payment",
        description: "Safe and encrypted payment experience."
    },

    {
        icon: <FaUndoAlt />,
        title: "Easy Returns",
        description: "Hassle-free returns within 7 days."
    },

    {
        icon: <FaHeadset />,
        title: "24/7 Support",
        description: "Our support team is always here to help."
    }

];

function WhyChooseUs() {

    return (

        <section className={styles.section}>

            <h2>Why Shop With Us</h2>

            <p className={styles.subtitle}>
                Everything you need for a secure, smooth and enjoyable shopping experience.
            </p>

            <div className={styles.grid}>

                {

                    features.map((feature, index) => (

                        <div
                            className={styles.card}
                            key={index}
                        >

                            <div className={styles.icon}>
                                {feature.icon}
                            </div>

                            <h3>
                                {feature.title}
                            </h3>

                            <p>
                                {feature.description}
                            </p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default WhyChooseUs;