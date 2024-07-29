-- CreateTable
CREATE TABLE "purchase_order" (
    "id" TEXT NOT NULL,
    "order_nbr" TEXT NOT NULL,
    "acumatica_guid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchase_order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "purchase_order_id_key" ON "purchase_order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_order_order_nbr_key" ON "purchase_order"("order_nbr");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_order_acumatica_guid_key" ON "purchase_order"("acumatica_guid");
