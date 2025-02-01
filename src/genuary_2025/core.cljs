(ns genuary-2025.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def window-width 600)
(def window-height 450)
(def move-speed 13)

(defn setup []
  (q/frame-rate 15)
  {:ticks 0})

(defn update-state [state]
  {:ticks (inc (:ticks state))})

(defn draw-state [state]
  (q/background 0x12 0x12 0x16)
  (q/stroke-weight 1)
  (let [focal-y (+ (/ window-height 2)
                   (* (/ window-height 2)
                      (q/sin (/ (:ticks state) 10))))
        focal-x (+ (/ window-width 2)
                   (* (/ window-width 2)
                      (q/cos (/ (:ticks state) 10))))]

    (q/stroke 0xe8 0xe6 0xe1)
    (doseq [i (range 16)]
      (let [y1 (/ focal-y
                  (+ 2 i))
            y2 (- window-height
                  (/ (- window-height focal-y)
                     (+ 2 i)))
            x1 (/ focal-x
                  (+ 2 i))
            x2 (- window-width
                  (/ (- window-width focal-x)
                     (+ 2 i)))]
        (q/line [x1 y1] [x2 y1])
        (q/line [x1 y2] [x2 y2])
        (q/line [x1 y1] [x1 y2])
        (q/line [x2 y1] [x2 y2])))))

(declare genuary-2025)
(defn ^:export run-sketch []
  (q/defsketch genuary-2025
    :host "genuary-2025"
    :size [window-width window-height]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

