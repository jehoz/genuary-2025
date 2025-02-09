(ns genuary-2025.core
  (:require [genuary-2025.day01 :as day01]
            [genuary-2025.day02 :as day02]
            [genuary-2025.day03 :as day03]
            [genuary-2025.day04 :as day04]))

(defn ^:export run-day [day]
  (case day
    1 (day01/run-sketch)
    2 (day02/run-sketch)
    3 (day03/run-sketch)
    4 (day04/run-sketch)))
