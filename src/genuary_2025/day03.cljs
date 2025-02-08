(ns genuary-2025.day03
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def window-width 600)
(def window-height 450)
(def rows 42)
(def cols 42)

(defn generate-top-row [t]
  (map #(< (q/noise % (* 0.1 t)) 0.5) (range cols)))

(defn rule-42 [row]
  (let [groups (partition 3 1 (take (+ cols 2) (cycle row)))
        transition (fn [grp] (and (nth grp 2)
                                  (not-every? true? grp)))]
    (map transition groups)))

(defn setup []
  (q/frame-rate 10)
  (q/color-mode :hsl 1.0)
  {:ticks 0
   :top-row (generate-top-row 0)})

(defn update-state [state]
  {:ticks (inc (:ticks state))
   :top-row (generate-top-row (:ticks state))})

(defn draw-state [state]
  (q/background 0.667 0.10 0.08)
  (let [col-width (/ window-width cols)
        row-height (/ window-height rows)]
    (doseq [[i row] (map-indexed vector (take rows (iterate rule-42 (:top-row state))))]
      (dotimes [j cols]
        (if (nth row j)
          (q/fill 0.12 0.10 0.9)
          (q/fill 0.12 0.10 0.1))
        (q/ellipse (+ (/ col-width 2) (* i col-width))
                   (+ (/ row-height 2) (* j row-height))
                   (* 0.8 row-height) (* 0.8 row-height))))))

(declare day-03)
(defn ^:export run-sketch []
  (q/defsketch day-03
    :host "canvas"
    :size [window-width window-height]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))
