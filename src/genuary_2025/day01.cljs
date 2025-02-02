(ns genuary-2025.day01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def window-width 600)
(def window-height 450)
(def move-speed 0.085)

(defn setup []
  (q/frame-rate 15)
  (q/color-mode :hsl 1.0)
  {:ticks 0})

(defn update-state [state]
  {:ticks (inc (:ticks state))})

(defn draw-state [state]
  (q/background 0.667 0.10 0.08)
  (q/stroke-weight 1)
  (let [half-w (/ window-width 2)
        half-h (/ window-height 2)
        focal-y (+ half-h
                   (* half-h
                      (q/sin (* 3 (:ticks state) move-speed))))
        focal-x (+ half-w
                   (* half-w
                      (q/cos (* 1 (:ticks state) move-speed))))]

    (doseq [i (range 16)]
      (q/stroke 0.12 0.10 (* 0.06 (- 16 i)))
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

(declare day-01)
(defn ^:export run-sketch []
  (q/defsketch day-01
    :host "day-01"
    :size [window-width window-height]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

