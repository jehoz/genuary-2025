(ns genuary-2025.day03
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))
(def window-width 600)
(def window-height 450)
(def num-rows 42)
(def num-cols 42)
(defn generate-top-row [t]
  (map #(< (q/noise (* 0.25 %) (* 0.05 t)) 0.5) (range num-cols)))
(defn rule-42 [row]
  (let [groups (partition 3 1 (take (+ num-cols 2) (cycle row)))
        transition (fn [grp] (and (nth grp 2) (not-every? true? grp)))]
    (take num-cols (drop (- num-cols 1) (cycle (map transition groups))))))
(defn setup []
  (q/frame-rate 10) (q/color-mode :hsl 1.0) (q/no-stroke) (q/ellipse-mode :corner)
  {:ticks 0 :rows (take num-rows (repeat (generate-top-row 0)))})
(defn update-state [state]
  (let [top-row (generate-top-row (:ticks state))
        rows (map rule-42 (:rows state))]
    {:ticks (inc (:ticks state))
     :rows (cons top-row (take (- num-rows 1) rows))}))
(defn draw-state [state]
  (q/background 0.667 0.10 0.08)
  (let [col-width (/ window-width num-cols)
        row-height (/ window-height num-rows)]
    (doseq [[i row] (map-indexed vector (:rows state))]
      (dotimes [j num-cols]
        (if (nth row j) (q/fill 0.12 0.10 0.9) (q/fill 0.667 0.10 0.08))
        (if (even? (+ i j (:ticks state)))
          (q/ellipse (* j col-width) (* i row-height)
                     (* 0.8 row-height) (* 0.8 row-height))
          (q/rect (* j col-width) (* i row-height)
                  (* 0.8 row-height) (* 0.8 row-height)))))))
(declare day-03)
(defn ^:export run-sketch []
  (q/defsketch day-03
    :host "canvas"
    :size [window-width window-height]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))
