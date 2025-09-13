"use client";

import * as React from "react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Card as BaseCard } from "@/components/card";
import { Switch } from "@/components/switch";
import Particles from "@/components/particles";
import { cn } from "@/util/utils";
import { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren<{ className?: string }>> = ({ className, ...props }) => (
  <BaseCard className={cn("border-zinc-800 hover:border-zinc-500/60", className)} {...props} />
);

function formatCurrency(value: number) {
  if (Number.isNaN(value) || !Number.isFinite(value)) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatNumber(value: number) {
  if (Number.isNaN(value) || !Number.isFinite(value)) return "0";
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

export default function CalculatorPage() {
  const [form, setForm] = React.useState({
    avgViews: "50000",
    posts: "4",
    downloadRate: "2",
    paymentRate: "2",
    cpm: "2",
    arpu: "7",
    mvcThreshold: "60000",
    surplusViewsInput: "0",
  });
  const [enableBonus, setEnableBonus] = React.useState(false);

  const parseNumber = (v: string) => {
    const n = Number(v.replace(/[^0-9.\-]/g, ""));
    return Number.isFinite(n) ? n : 0;
  };

  const avgViews = parseNumber(form.avgViews);
  const posts = parseNumber(form.posts);
  const downloadRate = parseNumber(form.downloadRate); // %
  const paymentRate = parseNumber(form.paymentRate); // %
  const cpm = parseNumber(form.cpm); // $ per 1000
  const arpu = parseNumber(form.arpu); // $ per subscription
  const mvcThreshold = parseNumber(form.mvcThreshold); // min views threshold for bonus

  const cpmRate = cpm / 1000; // e.g. 2 -> 0.002
  const payout = avgViews * posts * cpmRate; // per month
  const dueNow = payout * 0.2;
  const mvc = avgViews * posts; // minimum view count

  const totalViews = mvc;
  const totalDownloads = totalViews * (downloadRate / 100);
  const totalPayingUsers = totalDownloads * (paymentRate / 100);
  const revenue = totalPayingUsers * arpu;
  const profit = revenue - payout;

  // Bonus CPM above MVC (if enabled): Base + $1 CPM per 1,000 surplus views
  const baseFee = payout; // derive base fee from CPM base deal (NBC)
  const surplusViews = Math.max(0, parseNumber(form.surplusViewsInput));
  const bonusAmount = surplusViews / 1000; // $1 CPM => $1 per 1,000 views (fractional allowed)
  const totalPayoutWithBonus = baseFee + bonusAmount;
  const totalViewsWithSurplus = mvc + surplusViews;
  const totalDownloadsWithSurplus = totalViewsWithSurplus * (downloadRate / 100);
  const totalPayingUsersWithSurplus = totalDownloadsWithSurplus * (paymentRate / 100);
  const revenueWithSurplus = totalPayingUsersWithSurplus * arpu;
  const profitWithBonus = revenueWithSurplus - totalPayoutWithBonus;
  const payoutScaleViews = [200000, 500000, 1000000, 2000000, 5000000, 10000000];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-16 md:py-24">

        {/* Screen 1: Inputs */}
        <section className="min-h-screen flex flex-col items-center justify-start gap-8 pt-0 md:pt-2">
          <h2 className="text-2xl text-zinc-100 font-medium md:text-3xl">Enter Inputs</h2>
          <div className="w-full max-w-2xl">
            <Card>
              <div className="pt-4 pb-6 px-6 md:pt-6 md:pb-8 md:px-8">
                <form className="space-y-6 text-zinc-300">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2 max-w-lg">
                      <label htmlFor="avgViews" className="text-sm text-zinc-400">
                        Average Views
                      </label>
                      <Input
                        type="text"
                        id="avgViews"
                        name="avgViews"
                        inputMode="numeric"
                        value={form.avgViews}
                        onChange={handleChange}
                        placeholder="50,000"
                        className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2 max-w-lg">
                      <label htmlFor="posts" className="text-sm text-zinc-400">
                        Posts (default 4)
                      </label>
                      <Input
                        type="text"
                        id="posts"
                        name="posts"
                        inputMode="numeric"
                        value={form.posts}
                        onChange={handleChange}
                        placeholder="4"
                        className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2 max-w-lg">
                      <label htmlFor="downloadRate" className="text-sm text-zinc-400">
                        Download Rate (%)
                      </label>
                      <Input
                        type="text"
                        id="downloadRate"
                        name="downloadRate"
                        inputMode="decimal"
                        value={form.downloadRate}
                        onChange={handleChange}
                        placeholder="2"
                        className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2 max-w-lg">
                      <label htmlFor="paymentRate" className="text-sm text-zinc-400">
                        Conversion Rate (%)
                      </label>
                      <Input
                        type="text"
                        id="paymentRate"
                        name="paymentRate"
                        inputMode="decimal"
                        value={form.paymentRate}
                        onChange={handleChange}
                        placeholder="2"
                        className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2 max-w-lg sm:col-span-2">
                      <label htmlFor="cpm" className="text-sm text-zinc-400">
                        CPM (default $2)
                      </label>
                      <Input
                        type="text"
                        id="cpm"
                        name="cpm"
                        inputMode="decimal"
                        value={form.cpm}
                        onChange={handleChange}
                        placeholder="2"
                        className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2 max-w-lg sm:col-span-2">
                      <label htmlFor="arpu" className="text-sm text-zinc-400">
                        $ per subscription (ARPU)
                      </label>
                      <Input
                        type="text"
                        id="arpu"
                        name="arpu"
                        inputMode="decimal"
                        value={form.arpu}
                        onChange={handleChange}
                        placeholder="7"
                        className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60 rounded-xl"
                      />
                    </div>
                    {/* Bonus toggle */}
                    <div className="sm:col-span-2 rounded-xl border border-zinc-700/60 bg-zinc-900/60 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Switch id="bonus-enabled" checked={enableBonus} onCheckedChange={setEnableBonus} />
                        <label htmlFor="bonus-enabled" className="text-sm text-zinc-100">Bonus Enabled</label>
                      </div>
                      <div className="mt-1 text-xs text-zinc-400">Base + $1 CPM on views above MVC (no cap)</div>
                    </div>

                  </div>
                  <div className="mt-6 flex justify-end">
                    <a href="#results">
                      <Button type="button" className="bg-white text-black hover:bg-white/90 rounded-full px-6">Calculate</Button>
                    </a>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </section>

        {/* Screen 2: Results */}
        <section id="results" className="min-h-screen flex flex-col justify-start">
          <div className="flex flex-col space-y-40 lg:space-y-56">
            {/* Deal Cost */}
            <div className="flex flex-col gap-6">
              <h2 className="text-center text-xl sm:text-2xl text-zinc-100 font-medium">Deal Cost</h2>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-3 text-center">
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{`$${cpm} (${cpmRate.toFixed(3)})`}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">CPM</div></div></Card>
                <div className="text-2xl sm:text-3xl text-zinc-100">×</div>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(avgViews)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Average Views</div></div></Card>
                <div className="text-2xl sm:text-3xl text-zinc-100">×</div>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(posts)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Posts per month</div></div></Card>
                <div className="text-2xl sm:text-3xl text-zinc-100">=</div>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(payout)}/mo<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">PAYOUT</div></div></Card>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(dueNow)}/mo<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Due now (20%)</div></div></Card>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(payout)}/mo<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">End of the month</div></div></Card>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(mvc)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">MVC</div></div></Card>
              </div>
            </div>

            {/* Breakdown */}
            <div className="flex flex-col gap-6">
              <h2 className="text-center text-xl sm:text-2xl text-zinc-100 font-medium">Breakdown</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(avgViews)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Average Views</div></div></Card>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(posts)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Videos per deal</div></div></Card>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(totalViews)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Total guaranteed views</div></div></Card>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(totalViews)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Total guaranteed views</div></div></Card>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{downloadRate}%<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Standard download rate</div></div></Card>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(totalDownloads)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Total guaranteed downloads</div></div></Card>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(totalDownloads)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Total guaranteed downloads</div></div></Card>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{paymentRate}%<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Standard conversion rate</div></div></Card>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(totalPayingUsers)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Total guaranteed paying users</div></div></Card>
                <div className="md:col-span-2"><Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(totalPayingUsers)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Total guaranteed paying users</div></div></Card></div>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(arpu)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Money we make per subscription</div></div></Card>
                <div className="md:col-span-3"><Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(revenue)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Revenue made</div></div></Card></div>
              </div>
            </div>

            {/* Profit */}
            <div className="flex flex-col gap-6">
              <h2 className="text-center text-xl sm:text-2xl text-zinc-100 font-medium">Profit Made</h2>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 text-center">
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(revenue)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Revenue Made</div></div></Card>
                <div className="text-2xl sm:text-3xl text-zinc-100">-</div>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(payout)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Cost of the deal</div></div></Card>
                <div className="text-2xl sm:text-3xl text-zinc-100">=</div>
                <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(profit)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Revenue Made</div></div></Card>
              </div>
            </div>

            {/* Section 4: CPM Bonus Above MVC */}
            {enableBonus && (
              <div className="flex flex-col gap-6">
                <h2 className="text-center text-xl sm:text-2xl text-zinc-100 font-medium">CPM Bonus Above MVC</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2 max-w-lg">
                    <label htmlFor="surplusViewsInput" className="text-sm text-zinc-400">
                      Surplus Views (above MVC)
                    </label>
                    <Input
                      type="text"
                      id="surplusViewsInput"
                      name="surplusViewsInput"
                      inputMode="numeric"
                      value={form.surplusViewsInput}
                      onChange={handleChange}
                      placeholder="140000"
                      className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60 rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(baseFee)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Base Fee (from CPM deal)</div></div></Card>
                  <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(surplusViews)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Surplus Views</div></div></Card>
                  <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-center text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(bonusAmount)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Bonus ($1 CPM)</div></div></Card>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 text-center">
                  <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(baseFee)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Base Fee</div></div></Card>
                  <div className="text-2xl sm:text-3xl text-zinc-100">+</div>
                  <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(bonusAmount)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Bonus</div></div></Card>
                  <div className="text-2xl sm:text-3xl text-zinc-100">=</div>
                  <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(totalPayoutWithBonus)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Total Payout</div></div></Card>
                </div>
                {/* Profit section for surplus scenario */}
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 text-center">
                  <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(revenueWithSurplus)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Revenue (with surplus)</div></div></Card>
                  <div className="text-2xl sm:text-3xl text-zinc-100">-</div>
                  <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(totalPayoutWithBonus)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Cost (Base + Bonus)</div></div></Card>
                  <div className="text-2xl sm:text-3xl text-zinc-100">=</div>
                  <Card><div className="px-3 py-4 sm:px-4 sm:py-5 text-lg sm:text-xl font-semibold text-zinc-100">{formatCurrency(profitWithBonus)}<div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Updated Profit</div></div></Card>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="mb-10 mt-20 text-center text-lg sm:text-xl text-zinc-100 font-medium">Payout at Different View Totals</h3>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {payoutScaleViews.map((v) => {
                      const surplus = Math.max(0, v - mvcThreshold);
                      const bonus = surplus / 1000; // $1 CPM
                      const total = baseFee + bonus;
                      return (
                        <Card key={v}>
                          <div className="px-3 py-4 sm:px-4 sm:py-5 text-center">
                            <div className="text-sm text-zinc-400">Total Views</div>
                            <div className="text-lg sm:text-xl font-semibold text-zinc-100">{formatNumber(v)}</div>
                            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                              <div>
                                <div className="text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Surplus</div>
                                <div className="text-sm sm:text-base text-zinc-100">{formatNumber(surplus)}</div>
                              </div>
                              <div>
                                <div className="text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Bonus</div>
                                <div className="text-sm sm:text-base text-zinc-100">{formatCurrency(bonus)}</div>
                              </div>
                              <div>
                                <div className="text-[10px] sm:text-xs uppercase tracking-wide text-zinc-400">Payout</div>
                                <div className="text-sm sm:text-base text-zinc-100">{formatCurrency(total)}</div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}


