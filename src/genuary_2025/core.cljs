(ns genuary-2025.core
  (:require [genuary-2025.day01 :as day-01]))

(defn ^:export run-all []
  (day-01/run-sketch))
