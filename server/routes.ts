import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve PDF catalogues (whitelist approach for security)
  app.get("/api/catalogues/:filename", (req, res) => {
    const filename = req.params.filename;
    const allowedFiles = ["areca-catalogue.pdf", "bagasse-catalogue.pdf"];
    
    if (!allowedFiles.includes(filename)) {
      return res.status(404).json({ error: "Catalogue not found" });
    }
    
    const filePath = path.join(process.cwd(), "public", "catalogues", filename);
    res.download(filePath, (err) => {
      if (err) {
        res.status(404).json({ error: "Catalogue not found" });
      }
    });
  });

  // Create inquiry endpoint
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get all inquiries endpoint
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
