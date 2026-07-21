import { useEffect, useState } from "react";

import { FaBoxOpen } from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

import { getOrders } from "../../services/orderService";

import styles from "./Orders.module.css";

function Orders() {

  const { currentUser } = useAuth();

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadOrders() {

      if (!currentUser) return;

      try {

        const data = await getOrders(currentUser.uid);

        setOrders(data);

      }

      catch (error) {

        console.log(error);

      }

      finally {

        setLoading(false);

      }

    }

    loadOrders();

  }, [currentUser]);

  if (loading) {

    return (

      <section className={styles.orders}>

        <h2>Loading Orders...</h2>

      </section>

    );

  }

  return (

    <section className={styles.orders}>

      <h1>My Orders 📦</h1>

      {

        orders.length === 0 ?

        (

          <div className={styles.empty}>

            <FaBoxOpen />

            <h2>No Orders Yet</h2>

            <p>

              Place your first order from ShopSphere.

            </p>

          </div>

        )

        :

        (

          <div className={styles.grid}>

            {

              orders.map((order) => (

                <div

                  key={order.id}

                  className={styles.card}

                >

                  <h3>

                    Order #

                    {order.id.slice(0,8)}

                  </h3>

                  <p>

                    <strong>Name :</strong>

                    {order.name}

                  </p>

                  <p>

                    <strong>Email :</strong>

                    {order.email}

                  </p>

                  <p>

                    <strong>Payment :</strong>

                    {order.payment}

                  </p>

                  <p>

                    <strong>Status :</strong>

                    <span className={styles.status}>

                      {order.status}

                    </span>

                  </p>

                  <p>

                    <strong>Items :</strong>

                    {order.items.length}

                  </p>

                  <h2>

                    ₹ {order.total.toLocaleString()}

                  </h2>

                </div>

              ))

            }

          </div>

        )

      }

    </section>

  );

}

export default Orders;