import React from "react";
import { Star } from "lucide-react";
import "tailwindcss/tailwind.css";
import { Feedback } from "@/typings/order-typings";
import { Card } from "@/components/ui/card";
import { GenericCard } from "@/components/GenericCard";
const feedbacks: Feedback[] = [
  {
    customer: "Jenny Wilson",
    rating: 4,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    customer: "Dianne Russell",
    rating: 5,
    comment:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    customer: "Devon Lane",
    rating: 5,
    comment:
      "Normally wings are wings, but theirs are lean meaty and tender, and no, not breaded. It’s almost a meal in itself but then there is the huge variety of sauces to go with it.",
  },
];

const FeedbackCard: React.FC<{ feedback: Feedback }> = ({ feedback }) => {
  return (
    <div className="mb-4 w-full grid shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center mb-2">
        <img
          src={`https://i.pravatar.cc/50?u=${feedback.customer}`}
          alt={`${feedback.customer}`}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-wrap text-lg">{feedback.customer}</h3>
          <div className="flex flex-wrap">
            {[...Array(feedback.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500" />
            ))}
            {[...Array(5 - feedback.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gray-300" />
            ))}
          </div>
        </div>
      </div>
      <div className="w-fit max-w-[400px]" >{feedback.comment}</div>
    </div>
  );
};

const FeedbackList: React.FC = () => {
  return (
    <GenericCard>
      <h1 className="font-bold text-[25px]">Customer's Feedbacks</h1>
      <div className="flex flex-col w-full overflow-hidden justify-between h-full">
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={index} feedback={feedback} />
        ))}
      </div>
    </GenericCard>
  );
};

export default FeedbackList;
