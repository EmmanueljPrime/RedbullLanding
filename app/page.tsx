"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Brain, Snowflake, MapPin, ShoppingCart, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function RedBullZeroLanding() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200">
          <motion.div
              className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"
              style={{ y: heroY, opacity: heroOpacity }}
          />

          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-slate-300 rounded-full"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
          </div>

          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div className="space-y-4" variants={staggerItem}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
                    Pure Énergie
                  </Badge>
                </motion.div>
                <motion.h1
                    className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-900"
                    variants={staggerItem}
                >
                  Red Bull
                  <motion.span
                      className="block text-red-600"
                      animate={{
                        textShadow: ["0 0 0px #dc2626", "0 0 20px #dc2626", "0 0 0px #dc2626"],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ZERO
                  </motion.span>
                </motion.h1>
                <motion.p className="text-2xl lg:text-3xl font-light text-slate-600 tracking-wide" variants={staggerItem}>
                  L'énergie, sans compromis.
                </motion.p>
              </motion.div>

              <motion.div variants={staggerItem}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Découvrir la fraîcheur
                    <motion.div
                        className="ml-2"
                        animate={{ rotate: [0, 180, 360] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Snowflake className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ y: heroY }}
              >
                <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/134879_1-jPsM3igk80utX8ldH2JLpNc3mtwyBq.webp"
                    alt="Red Bull Zero - Canette glacée"
                    width={400}
                    height={600}
                    className="mx-auto drop-shadow-2xl"
                />
                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-full blur-3xl -z-10"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Zero Sucres Section */}
        <section className="py-24 bg-gradient-to-r from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInLeft}
              >
                <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotateY: -10,
                    }}
                    transition={{ duration: 0.5 }}
                >
                  <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/134879_1-jPsM3igk80utX8ldH2JLpNc3mtwyBq.webp"
                      alt="Red Bull Zero - Détail"
                      width={500}
                      height={700}
                      className="mx-auto"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                  className="space-y-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
              >
                <motion.div className="space-y-4" variants={staggerItem}>
                  <motion.h2 className="text-5xl font-black text-slate-900 tracking-tight" variants={fadeInRight}>
                    Zéro sucres,
                    <motion.span
                        className="block text-red-600"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      100% puissance
                    </motion.span>
                  </motion.h2>
                </motion.div>

                <motion.div className="space-y-6" variants={staggerContainer}>
                  {[
                    { icon: "🚫", title: "0 sucre ajouté", desc: "Toute l'énergie, sans les calories" },
                    { icon: "⚡", title: "Boost instantané", desc: "Taurine et caféine pour une performance optimale" },
                    { icon: "🧠", title: "Stimule corps et esprit", desc: "Concentration et énergie physique" },
                    { icon: "🧊", title: "À servir glacé", desc: "Pour un effet maximal de fraîcheur" },
                  ].map((benefit, index) => (
                      <motion.div
                          key={index}
                          className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300"
                          variants={staggerItem}
                          whileHover={{
                            scale: 1.02,
                            x: 10,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                          }}
                      >
                        <motion.span
                            className="text-2xl"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                        >
                          {benefit.icon}
                        </motion.span>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg">{benefit.title}</h3>
                          <p className="text-slate-600">{benefit.desc}</p>
                        </div>
                      </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Composition Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
                className="text-center space-y-4 mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
              <h2 className="text-5xl font-black text-slate-900">Composition & bienfaits</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Une formule scientifiquement élaborée pour une énergie pure et durable
              </p>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
              {[
                {
                  title: "Taurine",
                  benefit: "Performance physique",
                  description: "Améliore l'endurance et la récupération musculaire",
                  icon: <Zap className="h-8 w-8 text-red-600" />,
                },
                {
                  title: "Caféine",
                  benefit: "Concentration",
                  description: "Stimule la vigilance et la concentration mentale",
                  icon: <Brain className="h-8 w-8 text-red-600" />,
                },
                {
                  title: "B-vitamines",
                  benefit: "Métabolisme",
                  description: "Optimise la transformation énergétique",
                  icon: <Snowflake className="h-8 w-8 text-red-600" />,
                },
              ].map((component, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <Card className="group border-0 bg-white/80 backdrop-blur-sm h-full">
                      <motion.div
                          whileHover={{
                            y: -10,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                          }}
                          transition={{ duration: 0.3 }}
                      >
                        <CardContent className="p-8 text-center space-y-4">
                          <motion.div
                              className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors"
                              whileHover={{
                                scale: 1.1,
                                rotate: 360,
                              }}
                              transition={{ duration: 0.5 }}
                          >
                            {component.icon}
                          </motion.div>
                          <motion.h3
                              className="text-2xl font-bold text-slate-900"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                          >
                            {component.title}
                          </motion.h3>
                          <motion.div whileHover={{ scale: 1.05 }}>
                            <Badge variant="outline" className="text-red-600 border-red-200">
                              {component.benefit}
                            </Badge>
                          </motion.div>
                          <motion.p
                              className="text-slate-600"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.4 }}
                          >
                            {component.description}
                          </motion.p>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Univers Sensoriel */}
        <motion.section
            className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
        >
          <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="max-w-4xl mx-auto text-center space-y-8" variants={staggerContainer}>
              <motion.h2 className="text-5xl font-black tracking-tight" variants={staggerItem}>
                Univers sensoriel
              </motion.h2>
              <motion.p className="text-2xl font-light leading-relaxed" variants={staggerItem}>
                "Une explosion glacée de fraîcheur qui stimule sans alourdir."
              </motion.p>
              <motion.div variants={staggerItem}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-full bg-transparent"
                  >
                    Comment ça marche
                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Disponibilité */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
                className="text-center space-y-4 mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
              <h2 className="text-5xl font-black text-slate-900">Disponibilité</h2>
              <p className="text-xl text-slate-600">Trouvez Red Bull Zero sous tous ses formats</p>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
              {[
                {
                  format: "Canette 250ml",
                  price: "2,50€",
                  image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/134879_1-jPsM3igk80utX8ldH2JLpNc3mtwyBq.webp",
                },
                {
                  format: "Pack de 4",
                  price: "8,99€",
                  image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/134879_1-jPsM3igk80utX8ldH2JLpNc3mtwyBq.webp",
                },
                {
                  format: "Pack de 6",
                  price: "12,99€",
                  image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/134879_1-jPsM3igk80utX8ldH2JLpNc3mtwyBq.webp",
                },
              ].map((product, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <Card className="group overflow-hidden h-full">
                      <motion.div
                          whileHover={{
                            y: -5,
                            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                          }}
                          transition={{ duration: 0.3 }}
                      >
                        <div className="aspect-square bg-gradient-to-br from-slate-100 to-white p-8">
                          <motion.div
                              whileHover={{
                                scale: 1.1,
                                rotateY: 15,
                              }}
                              transition={{ duration: 0.5 }}
                          >
                            <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.format}
                                width={200}
                                height={300}
                                className="mx-auto h-full object-contain"
                            />
                          </motion.div>
                        </div>
                        <CardContent className="p-6 text-center space-y-4">
                          <h3 className="text-xl font-bold text-slate-900">{product.format}</h3>
                          <motion.p
                              className="text-2xl font-black text-red-600"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                          >
                            {product.price}
                          </motion.p>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="w-full bg-red-600 hover:bg-red-700">
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Ajouter au panier
                            </Button>
                          </motion.div>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </motion.div>
              ))}
            </motion.div>

            <motion.div
                className="text-center mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full bg-transparent">
                  <MapPin className="mr-2 h-5 w-5" />
                  Trouver un point de vente
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
                className="text-center space-y-4 mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
              <h2 className="text-5xl font-black text-slate-900">Ce qu'ils en pensent</h2>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
              {[
                {
                  text: "Je suis accro à l'énergie de Red Bull Zero sans me soucier du sucre.",
                  author: "Alex, 28 ans",
                  role: "Designer",
                  rating: 5,
                },
                {
                  text: "Parfait pour mes sessions de sport intensives. L'effet est immédiat !",
                  author: "Sarah, 24 ans",
                  role: "Athlète",
                  rating: 5,
                },
                {
                  text: "Mon allié pour les longues nuits de travail. Zéro culpabilité !",
                  author: "Marc, 31 ans",
                  role: "Développeur",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <Card className="bg-white border-0 shadow-lg h-full">
                      <motion.div
                          whileHover={{
                            y: -5,
                            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                          }}
                          transition={{ duration: 0.3 }}
                      >
                        <CardContent className="p-6 space-y-4">
                          <motion.div
                              className="flex space-x-1"
                              initial="hidden"
                              whileInView="visible"
                              variants={staggerContainer}
                          >
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                      hidden: { opacity: 0, scale: 0 },
                                      visible: { opacity: 1, scale: 1 },
                                    }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                            ))}
                          </motion.div>
                          <p className="text-slate-700 italic">"{testimonial.text}"</p>
                          <div>
                            <p className="font-bold text-slate-900">{testimonial.author}</p>
                            <p className="text-sm text-slate-600">{testimonial.role}</p>
                          </div>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <motion.section
            className="py-24 bg-gradient-to-r from-red-600 to-red-700 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
        >
          <motion.div className="container mx-auto px-4 text-center space-y-8" variants={staggerContainer}>
            <motion.h2 className="text-5xl font-black tracking-tight" variants={staggerItem}>
              Red Bull Zero.
            </motion.h2>
            <motion.p className="text-2xl font-light" variants={staggerItem}>
              Tu vas adorer ce que tu ne consommes pas.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={staggerItem}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 text-lg rounded-full bg-transparent"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Trouver près de moi
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Commander en ligne
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
            className="py-12 bg-slate-900 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <motion.div className="grid md:grid-cols-4 gap-8" variants={staggerContainer}>
              <motion.div className="space-y-4" variants={staggerItem}>
                <h3 className="text-2xl font-bold text-red-600">Red Bull</h3>
                <p className="text-slate-400">L'énergie qui vous donne des ailes</p>
              </motion.div>

              {[
                {
                  title: "Produits",
                  links: ["Red Bull Energy", "Red Bull Zero", "Red Bull Sugarfree", "Éditions spéciales"],
                },
                {
                  title: "Support",
                  links: ["Contact", "FAQ", "Livraison", "Retours"],
                },
                {
                  title: "Légal",
                  links: ["Mentions légales", "Politique de confidentialité", "CGV", "Cookies"],
                },
              ].map((section, index) => (
                  <motion.div key={index} className="space-y-4" variants={staggerItem}>
                    <h4 className="font-bold">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                          <motion.li key={linkIndex} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                              {link}
                            </a>
                          </motion.li>
                      ))}
                    </ul>
                  </motion.div>
              ))}
            </motion.div>

            <motion.div
                className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400"
                variants={staggerItem}
            >
              <p>&copy; 2024 Red Bull. Tous droits réservés.</p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
  )
}
