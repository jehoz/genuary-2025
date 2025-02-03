(ns genuary-2025.day02
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def window-width 600)
(def window-height 450)
(def bg-scale 1.01)

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsl 1.0)
  (q/background 0.667 0.10 0.08)
  (q/stroke-weight 1)
  {:ticks 0})

(defn update-state [state]
  {:ticks (inc (:ticks state))})

(defn draw-state [state]
  (q/fill 0.12 0.10 0.9)
  (q/stroke 0.667 0.10 0.08)
  (q/rect
   (* (q/noise (:ticks state)) window-width)
   (q/abs (* window-height (q/cos (:ticks state))))
   100 100)
  (let [last (q/current-graphics)
        dx (- window-width (* bg-scale window-width))
        dy (- window-height (* bg-scale window-height))]
    (q/image-filter last :posterize 2)
    (q/image last (/ dx 2) (/ dy 2)
             (- window-width dx)
             (- window-height dy))))

(declare day-02)
(defn ^:export run-sketch []
  (q/defsketch day-02
    :host "day-02"
    :size [window-width window-height]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

