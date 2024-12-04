import { REVIEWS } from "@/utils/constant";
import { Star } from "lucide-react";
import Image from "next/image";

function classNames(...classes: (string | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Review() {
  return (
    <>
      <div className="flex gap-20">
        <div className="w-1/2">
          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <Star
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      REVIEWS.average > rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300",
                      "size-5 shrink-0"
                    )}
                  />
                ))}
              </div>
              <p className="sr-only">{REVIEWS.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">
              Based on {REVIEWS.totalCount} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {REVIEWS.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div
                      aria-hidden="true"
                      className="ml-1 flex flex-1 items-center"
                    >
                      <Star
                        aria-hidden="true"
                        className={classNames(
                          count.count > 0
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300",
                          "size-5 shrink-0"
                        )}
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            style={{
                              width: `calc(${count.count} / ${REVIEWS.totalCount} * 100%)`,
                            }}
                            className="absolute inset-y-0 rounded-full  bg-yellow-400"
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / REVIEWS.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">
              Share your thoughts
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              If you’ve used this product, share your thoughts with other
              customers
            </p>

            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
            >
              Write a review
            </a>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl">Customer Reviews</h3>
          {REVIEWS.featured.map((review, reviewIdx) => (
            <div
              key={review.id}
              className="flex space-x-4 text-sm text-gray-500"
            >
              <div className="flex-none py-10">
                <Image
                  alt=""
                  src={review.avatarSrc}
                  width={40}
                  height={40}
                  className="size-10 rounded-full bg-gray-100"
                />
              </div>
              <div
                className={classNames(
                  reviewIdx === 0 ? "" : "border-t border-gray-200",
                  "py-10"
                )}
              >
                <h3 className="font-medium text-gray-900">{review.author}</h3>
                <p>
                  <time dateTime={review.datetime}>{review.date}</time>
                </p>

                <div className="mt-4 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        review.rating > rating
                          ? "text-yellow-400 fill-yellow-400" // Tambahkan fill
                          : "text-gray-300",
                        "size-5 shrink-0"
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  dangerouslySetInnerHTML={{ __html: review.content }}
                  className="mt-4 text-sm/6 text-gray-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
