"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { getStartedAction } from "@/actions/get-started-action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getStartedFormSchema } from "@/lib/form-schema";

type Schema = z.infer<typeof getStartedFormSchema>;

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const form = useForm<Schema>({
    resolver: zodResolver(getStartedFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      bookTitle: "",
      wordCount: "",
      message: "",
    },
  });

  const formAction = useAction(getStartedAction, {
    onSuccess: () => {
      form.reset();
    },
    onError: () => {
      // Error handling
    },
  });

  const handleSubmit = form.handleSubmit(async (data: Schema) => {
    formAction.execute(data);
  });

  const { isExecuting, hasSucceeded } = formAction;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-lg mx-4"
          >
            <div className="bg-background border rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-semibold">Get Started</h2>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 hover:bg-muted transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {hasSucceeded ? (
                  <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, stiffness: 300, damping: 25 }}
                    className="py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                      }}
                      className="mx-auto mb-4 flex w-fit justify-center rounded-full border p-3 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                    >
                      <Check className="size-8 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold">Thank you!</h3>
                    <p className="text-muted-foreground">
                      We've received your request. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={onClose} className="mt-6">
                      Close
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="John Doe" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input {...field} type="email" placeholder="john@example.com" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input {...field} type="tel" placeholder="+1 (555) 000-0000" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="bookTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Book Title *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="The Amazing Adventure" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="wordCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Estimated Word Count</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select word count range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="0-10000">Under 10,000 words</SelectItem>
                                <SelectItem value="10000-30000">10,000 - 30,000 words</SelectItem>
                                <SelectItem value="30000-50000">30,000 - 50,000 words</SelectItem>
                                <SelectItem value="50000-80000">50,000 - 80,000 words</SelectItem>
                                <SelectItem value="80000+">Over 80,000 words</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Tell us about your book or any special requirements..."
                                className="resize-none"
                                rows={3}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={onClose}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button type="submit" disabled={isExecuting} className="flex-1">
                          {isExecuting ? "Submitting..." : "Submit Request"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
