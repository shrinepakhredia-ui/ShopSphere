import { useState } from "react";

import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import styles from "./FAQs.module.css";

const faqs = [

  {
    question: "How do I place an order?",
    answer:
      "Browse products, add your favorite items to the cart, proceed to checkout, enter your shipping details, choose a payment method, and confirm your order.",
  },

  {
    question: "Which payment methods are accepted?",
    answer:
      "ShopSphere currently supports Cash on Delivery (COD), UPI, Credit Cards, and Debit Cards.",
  },

  {
    question: "How long does shipping take?",
    answer:
      "Standard delivery usually takes 3–7 business days depending on your location.",
  },

  {
    question: "Can I cancel my order?",
    answer:
      "Yes. Orders can be cancelled before they are dispatched from our warehouse.",
  },

  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you'll receive a tracking ID through your registered email.",
  },

  {
    question: "What is your return policy?",
    answer:
      "Eligible products can be returned within 7 days of delivery if they are damaged or defective.",
  },

];

function FAQs() {

  const [active, setActive] = useState(null);

  function toggle(index) {

    if (active === index) {

      setActive(null);

    }

    else {

      setActive(index);

    }

  }

  return (

    <section className={styles.faqs}>

      <div className={styles.header}>

        <span>❓ Help Center</span>

        <h1>

          Frequently Asked Questions

        </h1>

        <p>

          Find quick answers to the most common questions about orders,
          payments, shipping and returns.

        </p>

      </div>

      <div className={styles.container}>

        {

          faqs.map((faq, index) => (

            <div
              key={index}
              className={styles.card}
            >

              <button
                className={styles.question}
                onClick={() => toggle(index)}
              >

                <span>

                  {faq.question}

                </span>

                {

                  active === index

                    ?

                    <FaChevronUp />

                    :

                    <FaChevronDown />

                }

              </button>

              {

                active === index &&

                (

                  <div className={styles.answer}>

                    <p>

                      {faq.answer}

                    </p>

                  </div>

                )

              }

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default FAQs;