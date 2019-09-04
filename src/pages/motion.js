import React, { Component } from 'react'
import { motion,variants } from "framer-motion"
import Layout from '../components/layout'

export default class Motion extends Component {
    render() {
        return (
            <Layout>
                <motion.div 
                    animate={{
                        x: 0,
                        backgroundColor: 'purple',
                        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                        position: "fixed",
                        rotate:360,
                        transitionEnd: {
                        display: "none",
                        },
                    }} 
                    transition={{ duration: 2 }}
                >
                    <h2>Animation Component</h2>
                </motion.div>
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    whilePress={{ scale: 0.8 }}
                    style={{ x: 100 }}
                >
                    <h2> Framer Motion Component</h2>
                </motion.a>

            </Layout>
        )
    }
}
