(ns genuary-2025.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def window-width 600)
(def window-height 450)
(def move-speed 10)

(defn setup []
  (q/frame-rate 15)
  (q/background 11)
  {:hline-position {:x 300 :y 100}
   :hline-direction {:x 1 :y 1}
   :vline-position {:x (- window-width 200) :y (- window-height 100)}
   :vline-direction {:x -1 :y -1}})

(defn update-ball [position direction]
  (let [{x :x y :y} position
        {dx :x dy :y} direction
        dx-next (cond (< x 0) 1
                      (> x window-width) -1
                      :else dx)
        dy-next (cond (< y 0) 1
                      (> y window-height) -1
                      :else dy)]
    [{:x (+ x (* move-speed dx-next))
      :y (+ y (* move-speed dy-next))}
     {:x dx-next :y dy-next}]))

(defn update-state [state]
  (let [[h-pos h-dir] (update-ball (:hline-position state) (:hline-direction state))
        [v-pos v-dir] (update-ball (:vline-position state) (:vline-direction state))]
    {:hline-position h-pos
     :hline-direction h-dir
     :vline-position v-pos
     :vline-direction v-dir}))

(defn draw-state [state]
  (q/stroke 255)
  (q/stroke-weight 2)
  (let [{{h-x :x h-y :y} :hline-position
         {v-x :x v-y :y} :vline-position} state]
    (q/line [(- h-x 50) h-y] [(+ h-x 50) h-y])
    (q/line [v-x (- v-y 50)] [v-x (+ v-y 50)])))

(defn ^:export run-sketch []
  (q/defsketch genuary-2025
    :host "genuary-2025"
    :size [window-width window-height]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
