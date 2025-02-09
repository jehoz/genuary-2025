(ns genuary-2025.day04
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def window-width 600)
(def window-height 450)
(def move-speed 0.05)

(defn draw-circles [off-x off-y ticks]
  (let [x-dist (/ window-width 9)
        y-dist (/ window-height 17)]
    (doseq [x (map #(* x-dist %) (range 1 9))]
      (doseq [y (map #(* y-dist %) (range 1 17))]
        (q/ellipse (+ x off-x (* (/ window-width 20) (q/sin (* move-speed (+ x y ticks)))))
                   (+ y off-y)
                   25 25)))))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsl 1.0)
  (q/no-stroke)
  (q/ellipse-mode :center)
  {:ticks 0})

(defn update-state [state]
  {:ticks (inc (:ticks state))})

(defn draw-state [state]
  (q/background 0.667 0.10 0.08)
  (q/fill 0.667 0.10 0.12)
  (draw-circles -2 -2 (:ticks state))
  (q/fill 0.667 0.10 0.0)
  (draw-circles 2 2 (:ticks state))
  (q/fill 0.667 0.10 0.08)
  (draw-circles 0 0 (:ticks state)))

(declare day-04)
(defn ^:export run-sketch []
  (q/defsketch day-04
    :host "canvas"
    :size [window-width window-height]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

